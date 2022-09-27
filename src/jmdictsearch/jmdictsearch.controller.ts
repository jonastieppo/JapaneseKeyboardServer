import { Controller, Get } from '@nestjs/common';
import { Word } from 'jmdict-simplified-node';
import { JmdictsearchService } from './jmdictsearch.service';

@Controller('jmdictsearch')
export class JmdictsearchController {

    constructor(private jmdictSearcher : JmdictsearchService){}

    @Get('find')
    async findNi(): Promise<Word[]> {
      return await this.jmdictSearcher.findNi()
    }
}
