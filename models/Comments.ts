"use strict";
import { DataTypes, Model, Association } from "sequelize";
import { sequelize } from "./index";
import { MainPosts } from "./MainPosts";
import { Users } from "./Users";

interface CommentAttributes {
  user_id: number;
  user_name: string;
  mainPost_id: number;
  post_title: string;
  comment: string;
}

export class Comments extends Model<CommentAttributes> {
  public user_id!: number;
  public user_name!: string;
  public mainPost_id!: number;
  public post_title!: string;
  public comment!: string;
}

Comments.init(
  {
    user_id: DataTypes.INTEGER,
    user_name: DataTypes.STRING,
    mainPost_id: DataTypes.INTEGER,
    post_title: DataTypes.STRING,
    comment: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "Comments",
  }
);

// Comments.hasMany(Users, {
//   foreignKey: "user_id",
//   sourceKey: "id",
// });

// Comments.hasMany(MainPosts, {
//   foreignKey: "mainPost_id",
//   sourceKey: "id",
// });
