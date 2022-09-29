import { Injectable } from '@nestjs/common';
import {kanjiAnywhere, readingAnywhere, readingBeginning, setup, setup as setupJmdict, SetupType, Word} from 'jmdict-simplified-node'

@Injectable()
export class JmdictsearchService {

    jmdictPromise : SetupType  
    constructor() {
        this.initDB()
    }
    async initDB(){
        this.jmdictPromise = await setup('my-jmdict-simplified-db');
    }
    async ReadBeginning(): Promise<string[]> {
        return await (this.ReturnKanjiText(await this.FilterWordWithKanji(await kanjiAnywhere(this.jmdictPromise.db,'日'))))
    }

    async FilterWordWithKanji(WordArray : Word []) : Promise<Word[]> {
        return WordArray.filter(value => value.kanji.filter(kanji=>kanji.common).length !=0)
    }

    async ReturnKanjiText(word : Word[]) : Promise<string[]> {
        return await word.map(value=>value.kanji.map(v=>v.text)).flat()
    }


}
