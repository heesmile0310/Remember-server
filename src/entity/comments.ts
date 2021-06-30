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

import donors from "./donors";
import likes from "./likes";
import mainPosts from "./mainPosts";
import users from "./users";

@Entity({ name: "comments" })
export default class comments extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id: number;

  @Column()
  mainPost_id: number;

  @Column()
  comment: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne((type) => users, (users) => users.id)
  users: users[];

  @ManyToOne((type) => mainPosts, (mainPosts) => mainPosts.id)
  mainPosts: mainPosts[];
}
