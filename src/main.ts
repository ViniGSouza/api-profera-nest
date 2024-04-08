import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { useContainer } from 'class-validator';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
  useContainer(app.select(AppModule), { fallbackOnErrors: true });
  app.enableShutdownHooks();
  app.enableCors(
    {
      origin: '*',
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      allowedHeaders: '*',
      credentials: true
    }
  );

  const config = new DocumentBuilder()
  .setTitle('API Curso em Vídeo - P R O F E R A')
  .setDescription('API Curso em Vídeo - P R O F E R A')
  .setVersion('1.0')
  .addBearerAuth()
  .addTag('Auth')
  .addTag('Usuários')
  .addTag('Cursos')
  .addTag('Aulas')
  .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  
  await app.listen(8000);
}
bootstrap();
