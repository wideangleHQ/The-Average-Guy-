import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { SafeUser } from "../../users/user-response";

export const CurrentUser = createParamDecorator((_data: unknown, ctx: ExecutionContext): SafeUser => {
  const request = ctx.switchToHttp().getRequest();
  return request.user;
});
