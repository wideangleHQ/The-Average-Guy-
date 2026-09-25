import { ConflictException, Injectable } from "@nestjs/common";
import { Role } from "@prisma/client";
import * as bcrypt from "bcryptjs";
import { PrismaService } from "../database/prisma.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { RegisterDto } from "./dto/register.dto";
import { SafeUser, toSafeUser } from "./user-response";

const SALT_ROUNDS = 12;

interface NewUser {
  email: string;
  password: string;
  name?: string;
  role?: Role;
}

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  findByEmail(email: string) {
    return this.prisma.user.findUnique({ where: { email } });
  }

  async findById(id: string): Promise<SafeUser | null> {
    const user = await this.prisma.user.findUnique({ where: { id } });
    return user ? toSafeUser(user) : null;
  }

  async list(): Promise<SafeUser[]> {
    const users = await this.prisma.user.findMany({ orderBy: { createdAt: "asc" } });
    return users.map(toSafeUser);
  }

  /** ADMIN-only account creation (via /admin/users) - caller picks the role. */
  create(dto: CreateUserDto): Promise<SafeUser> {
    return this.createUser(dto);
  }

  /**
   * Public self-signup (via /public/auth/register). Always GUEST - a public
   * caller must never be able to set their own role.
   */
  registerGuest(dto: RegisterDto): Promise<SafeUser> {
    return this.createUser({ ...dto, role: Role.GUEST });
  }

  private async createUser({ email, password, name, role }: NewUser): Promise<SafeUser> {
    const existing = await this.findByEmail(email);
    if (existing) {
      throw new ConflictException("A user with this email already exists");
    }

    const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);
    const user = await this.prisma.user.create({
      data: { email, passwordHash, name, role },
    });

    return toSafeUser(user);
  }
}
