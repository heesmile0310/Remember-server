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
import likes from "./likes";
import mainPosts from "./mainPosts";
import users from "./users";

@Entity({ name: "donors" })
export default class donors extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id: number;

  @Column()
  mainPost_id: number;

  @Column()
  donationAmount: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  // @ManyToOne((type) => users, (users) => users.id)
  // users: users[];

  // @OneToMany((type) => mainPosts, (mainPosts) => mainPosts.id)
  // mainPosts: mainPosts[];
}
