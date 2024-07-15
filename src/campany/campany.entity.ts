import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'organization' })
export class orga {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  description: string;

  @ManyToOne(() => orga, (orga) => orga.childern)
  parent: orga;
  @OneToMany(() => orga, (orga) => orga.parent)
  childern: orga[];
}
