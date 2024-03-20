import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class DayCost extends BaseEntity {
    @PrimaryGeneratedColumn()
    _id: number

    @Column()
    value: number

    @Column()
    type: String

    @Column()
    limit: number

    @Column()
    day: Date
}