import { User } from "src/users/user.entity";
import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Service {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    category: string;

    @Column()
    description: string;

    @Column({ type: 'numeric', precision: 10, scale: 2 })
    price: number;

    @ManyToOne(()=>User, (user)=>user.services)
    provider: User;
}
