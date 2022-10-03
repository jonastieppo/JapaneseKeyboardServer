import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Word } from 'jmdict-simplified-node';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Response<T> {
  data: T;
}

class TransformJMDictSearch {

    async transformResponse(WordArray : Word [], length : number = 1) : Promise<string[]> {
        const WordWithKanji : Word[] = await this.FilterWordWithKanji(WordArray);
        const KanjiText : string[] = await this.ReturnKanjiText(WordWithKanji)
        const KanjiTextLengthOne : string[] = await this.ReturnStringWithLength(KanjiText, length)

        return KanjiTextLengthOne
    }
    

      async FilterWordWithKanji(WordArray : Word []) : Promise<Word[]> {
        return WordArray.filter(value => value.kanji.filter(kanji=>kanji.common).length !=0)
    }
    
      async ReturnKanjiText(word : Word[]) : Promise<string[]> {
        return word.map(value=>value.kanji.map(v=>v.text)).flat()
    }
    
      async ReturnStringWithLength(word : string[], length : number = 1) : Promise<string[]> {
        return word.filter(value=>value.length<=length)
    }

}

@Injectable()
export class TransformInterceptor<T> extends TransformJMDictSearch implements NestInterceptor<T,  Promise<string[]>>{
  intercept(context: ExecutionContext, next: CallHandler): Observable< Promise<string[]>> {
    const _request = context.switchToHttp().getRequest()

    return next.handle().pipe(map(data => this.transformResponse(data,_request.body.YomiKata.length)));
  }
}