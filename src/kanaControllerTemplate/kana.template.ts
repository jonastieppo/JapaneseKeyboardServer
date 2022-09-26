import { Get, Post, Body, Param, Put, Delete, UsePipes } from "@nestjs/common"
import { KanaServiceTemplate } from "src/kanaServiceTemplate/kana.template"
import { SchemaValidationPie } from "src/pipes/schemavalidation.pipe";
import { DeleteResult, UpdateResult } from "typeorm";
import { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity";

export abstract class KanaControllerTemplate<KanaType>{

    constructor(private kanaService : KanaServiceTemplate<KanaType>){}

    @Get('all')
    async getAll() : Promise<KanaType[]>{
        return await this.kanaService.getAll()
    }
    @Post('create')
    @UsePipes(new SchemaValidationPie())
    async create(@Body() body : KanaType) : Promise<KanaType>{
        return await this.kanaService.create(body)
    }

    @Put(':id')
    // @UsePipes(new SchemaValidationPie()) //estudar como implementar melhor depois
    async Update(@Param() id: number, @Body() kana: QueryDeepPartialEntity<KanaType>): Promise<UpdateResult> {
      return await this.kanaService.update(id, kana)
   
    }
    
    @Delete('all')
    async DeleteAll(): Promise<DeleteResult> {
      return await this.kanaService.deleteAll();
   
    }
    @Delete(':id')
    async Delete(@Param() id: number): Promise<DeleteResult> {
      return await this.kanaService.delete(id);
   
    }
a

}