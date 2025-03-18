import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Filtra propiedades desconocidas
      forbidNonWhitelisted: true, // Lanza error si hay propiedades desconocidas
      transform: true, // Convierte automáticamente los tipos de datos
    }),
  );
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
