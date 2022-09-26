import { Injectable, PipeTransform, ArgumentMetadata, BadRequestException } from "@nestjs/common";

@Injectable()
export class SchemaValidationPie implements PipeTransform {

  transform(value: any, metadata: ArgumentMetadata) {

    const kanaObject : string[] = ["YomiKata","Kana"]    
    kanaObject.map(key=>{
        if(!value[`${key}`])
            throw new BadRequestException(`Validation failed. '${key}' property is missing`);
    })

    return value
  }
}