import { Body, Controller, Get, Post, UseInterceptors } from '@nestjs/common';
import { Word } from 'jmdict-simplified-node';
import { StringKana } from 'src/interfaces/body.interface';
import { TransformInterceptor } from './jmdictsearch.interceptor';
import { JmdictsearchService } from './jmdictsearch.service';

@Controller('jmdictsearch')
export class JmdictsearchController {

    constructor(private jmdictSearcher : JmdictsearchService){}

    @UseInterceptors(TransformInterceptor)
    @Get('find')
    async find(@Body() body : StringKana): Promise<Word[]> {
      return await this.jmdictSearcher.ReadBeginning(body.YomiKata)
    }
}
