import { Body, Controller, Get, Param, Post, Put, UsePipes } from '@nestjs/common';
import { KanaControllerTemplate } from 'src/kanaControllerTemplate/kana.template';
import { SchemaValidationPie } from 'src/pipes/schemavalidation.pipe';
import { Hiragana } from './hiragana.entity';
import { HiraganaService } from './hiragana.service';

@Controller('hiragana')
export class HiraganaController extends KanaControllerTemplate<Hiragana>{

    constructor(private HiraganaService :  HiraganaService){
        super(HiraganaService);
    }
}
