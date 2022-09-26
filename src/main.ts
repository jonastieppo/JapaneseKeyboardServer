import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import "reflect-metadata"
import { AllExceptionsFilter } from './app.exeception';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const httpAdapter  = app.get(HttpAdapterHost);
  app.useGlobalFilters(new AllExceptionsFilter(httpAdapter));
  await app.listen(1234);
}
bootstrap();
