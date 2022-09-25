import { Controller } from '@nestjs/common';
import { KanaControllerTemplate } from 'src/kanaControllerTemplate/kana.template';
import { Katakana } from './katakana.entity';
import { KatakanaService } from './katakana.service';

@Controller('katakana')
export class KatakanaController extends KanaControllerTemplate<Katakana>{
    constructor(private katakanaService :  KatakanaService){
        super(katakanaService);
    }
}
