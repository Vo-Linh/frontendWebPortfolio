import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@Entity()
export class Timeline extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column() 
    Title: string;

    @Column("longtext")
    Description: string;
   
    @Column()
    img: string;

    @Column()
    Date: string;

}