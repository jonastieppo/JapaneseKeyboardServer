import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { KanaServiceTemplate } from 'src/kanaServiceTemplate/kana.template';
import { Repository, UpdateResult } from 'typeorm';
import { Hiragana } from './hiragana.entity';

@Injectable()
export class HiraganaService extends KanaServiceTemplate<Hiragana> {

    constructor(@InjectRepository(Hiragana) private hiraganaRepository: Repository<Hiragana>) {
        super(hiraganaRepository);
    }
}
