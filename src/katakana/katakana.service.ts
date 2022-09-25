import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { KanaServiceTemplate } from 'src/kanaServiceTemplate/kana.template';
import { Repository } from 'typeorm';
import { Katakana } from './katakana.entity';

@Injectable()
export class KatakanaService extends KanaServiceTemplate<Katakana>{
    constructor(@InjectRepository(Katakana) private katakanaRepository: Repository<Katakana>) {
        super(katakanaRepository);
    }
}
