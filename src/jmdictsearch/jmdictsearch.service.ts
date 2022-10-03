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
    async ReadBeginning(YomiKata : string): Promise<Word[]> {
        return await readingBeginning(this.jmdictPromise.db, YomiKata)
    }

}
