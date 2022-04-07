import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@Entity()
export class Blog extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;


    @Column() 
    Title: string;

    @Column("longtext")
    Description: string;
   
    @Column()
    img: string;

    @Column()
    link: string;
}