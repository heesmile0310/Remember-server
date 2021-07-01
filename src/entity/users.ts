import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToMany,
  JoinTable,
  BaseEntity,
  ManyToOne,
} from "typeorm";

import comments from "./comments";
import donors from "./donors";
import likes from "./likes";
import mainPosts from "./mainPosts";

@Entity({ name: "users" })
export default class users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  mobile: string;

  @Column()
  dateOfBirth: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  // @OneToMany((type) => comments, (comments) => comments.user_id)
  // comments: comments[];

  // @OneToMany((type) => donors, (donors) => donors.user_id)
  // donors: donors[];

  // @OneToMany((type) => likes, (likes) => likes.user_id)
  // likes: likes[];
}
