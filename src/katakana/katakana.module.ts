import { Module } from '@nestjs/common';
import { KatakanaService } from './katakana.service';
import { KatakanaController } from './katakana.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Katakana } from './katakana.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Katakana])],
  providers: [KatakanaService],
  controllers: [KatakanaController]
})
export class KatakanaModule {}
