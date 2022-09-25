import { Module } from '@nestjs/common';
import { HiraganaService } from './hiragana.service';
import { HiraganaController } from './hiragana.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hiragana } from './hiragana.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Hiragana])],
  providers: [HiraganaService],
  controllers: [HiraganaController]
})
export class HiraganaModule {}
