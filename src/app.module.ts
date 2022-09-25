import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HiraganaModule } from './hiragana/hiragana.module';
import { KatakanaModule } from './katakana/katakana.module';
import { Hiragana } from './hiragana/hiragana.entity';
import { Katakana } from './katakana/katakana.entity';
@Module({
  imports: [ TypeOrmModule.forRoot({
    type:  'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '1234',
    database: 'JapaneseKeyBoardServer',
    entities: [Hiragana, Katakana],
    synchronize: true,
  }), HiraganaModule, KatakanaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
