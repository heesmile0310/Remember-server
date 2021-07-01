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
import users from "./users";

@Entity({ name: "mainPosts" })
export default class mainPosts extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  body: string;

  @Column()
  targetAmount: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  //   @OneToMany((type) => likes, (likes) => likes.mainPost_id)
  //   likes: likes[];

  //   @ManyToOne((type) => donors, (donors) => donors.mainPost_id)
  //   donors: donors[];

  //   @OneToMany((type) => comments, (comments) => comments.mainPost_id)
  //   comments: comments[];
}
