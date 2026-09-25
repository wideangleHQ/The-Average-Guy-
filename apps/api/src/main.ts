import "reflect-metadata";
import { NestFactory } from "@nestjs/core";
import { ConfigService } from "@nestjs/config";
import { ValidationPipe } from "@nestjs/common";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);

  const apiPrefix = config.get<string>("API_PREFIX", "api/v1");
  const corsOrigins = config
    .get<string>("CORS_ORIGINS", "")
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean);

  app.setGlobalPrefix(apiPrefix);
  app.enableCors({ origin: corsOrigins, credentials: true });
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));

  const port = config.get<number>("PORT", 4000);
  await app.listen(port);
}

bootstrap();
