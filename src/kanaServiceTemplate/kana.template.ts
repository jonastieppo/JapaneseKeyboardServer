import { Injectable } from "@nestjs/common";
import { DeleteResult, ObjectLiteral, Repository, UpdateResult } from "typeorm";
import { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity";
import { threadId } from "worker_threads";
import { validate } from "class-validator"

export abstract class KanaServiceTemplate<KanaType>{

    constructor(private repository : Repository<KanaType>){}

    async getAll(): Promise<KanaType[]> {
        return await this.repository.find()
    }

    async create(kana: KanaType): Promise<KanaType> {
        return await this.repository.save(kana)
    }

    async update(id: number, kana: QueryDeepPartialEntity<KanaType>): Promise<UpdateResult> {
        return await this.repository.update(id, kana);
    }

    async delete(id: number): Promise<DeleteResult> {
        return await this.repository.delete(id);
    }

    async deleteAll(): Promise<DeleteResult> {
        return await this.repository.delete({});
    }
}
