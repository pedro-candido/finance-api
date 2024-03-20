import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    _id: number

    @Column({
        unique: true
    })
    username: String

    @Column()
    password: String

    @Column()
    birthdate: Date

    @Column({
        nullable: false
    })
    email: String

    @Column()
    fullname: String

    @Column()
    phone: String

}
