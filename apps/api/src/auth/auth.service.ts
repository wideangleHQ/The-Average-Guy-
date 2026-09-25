import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Role } from "@prisma/client";
import * as bcrypt from "bcryptjs";
import { UsersService } from "../users/users.service";
import { toSafeUser, SafeUser } from "../users/user-response";

export interface JwtPayload {
  sub: string;
  email: string;
  role: string;
}

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  /**
   * `allowedRoles` keeps the admin and customer login endpoints from
   * authenticating each other's accounts - a leaked customer password must
   * never unlock the admin panel, and vice versa. Failure always reads as
   * "invalid credentials" rather than "wrong portal" to avoid leaking which
   * emails belong to which role.
   */
  async validateCredentials(email: string, password: string, allowedRoles: Role[]): Promise<SafeUser> {
    const user = await this.usersService.findByEmail(email);
    if (!user || !allowedRoles.includes(user.role)) {
      throw new UnauthorizedException("Invalid email or password");
    }

    const passwordMatches = await bcrypt.compare(password, user.passwordHash);
    if (!passwordMatches) {
      throw new UnauthorizedException("Invalid email or password");
    }

    return toSafeUser(user);
  }

  login(user: SafeUser) {
    const payload: JwtPayload = { sub: user.id, email: user.email, role: user.role };
    return {
      accessToken: this.jwtService.sign(payload),
      user,
    };
  }
}
