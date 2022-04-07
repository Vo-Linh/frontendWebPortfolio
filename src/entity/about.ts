import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@Entity()
export class About extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column() 
    Name: string;

    @Column() 
    Title: string;

    @Column("longtext")
    Description: string;
   
    @Column()
    img: string;

    @Column()
    linkGithub: string;

    @Column()
    linkLinkend: string;

}