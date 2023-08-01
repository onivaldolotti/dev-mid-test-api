import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { swaggerSetup } from './swagger-setup';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder().setTitle('Test Developer API').build();
  const document = SwaggerModule.createDocument(app, config);

  swaggerSetup(document);

  SwaggerModule.setup('api/docs', app, document);

  await app.listen(3010);
}
bootstrap();
