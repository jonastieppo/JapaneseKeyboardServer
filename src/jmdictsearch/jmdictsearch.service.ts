import { Injectable } from '@nestjs/common';
import {readingBeginning, setup as setupJmdict, SetupType, Word} from 'jmdict-simplified-node'

@Injectable()
export class JmdictsearchService {

    jmdictPromise : SetupType  
    constructor() {
        this.initDB()
    }
    async initDB(){
        this.jmdictPromise = await setupJmdict('my-jmdict-simplified-db', 'jmdict-eng-3.1.0.json');
    }
    async findNi(): Promise<Word[]> {
        return await readingBeginning(this.jmdictPromise.db,'日')
    }
}
