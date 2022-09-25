import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Katakana {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  YomiKata: string;

  @Column({
    unique : true
  })
  Kana: string;

}