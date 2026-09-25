import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { Role } from "@prisma/client";
import { RegisterDto } from "../users/dto/register.dto";
import { UsersService } from "../users/users.service";
import { AuthService } from "./auth.service";
import { LoginDto } from "./dto/login.dto";

@Controller("public/auth")
export class PublicAuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
  ) {}

  @Post("register")
  @HttpCode(HttpStatus.CREATED)
  async register(@Body() dto: RegisterDto) {
    const user = await this.usersService.registerGuest(dto);
    return this.authService.login(user);
  }

  @Post("login")
  @HttpCode(HttpStatus.OK)
  async login(@Body() dto: LoginDto) {
    const user = await this.authService.validateCredentials(dto.email, dto.password, [Role.GUEST]);
    return this.authService.login(user);
  }
}
