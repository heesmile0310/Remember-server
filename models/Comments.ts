"use strict";
import { DataTypes, Model, Association } from "sequelize";
import { sequelize } from "./index";
import { MainPosts } from "./MainPosts";
import { Users } from "./Users";

interface CommentAttributes {
  user_id: number | null;
  user_name: string | null;
  mainPost_id: number | null;
  post_title: string | null;
  comment: string | null;
  url: string | null;
}

export class Comments extends Model<CommentAttributes> {
  public user_id!: number | null;
  public user_name!: string | null;
  public mainPost_id!: number | null;
  public post_title!: string | null;
  public comment!: string | null;
  public url!: string | null;
}

Comments.init(
  {
    user_id: DataTypes.INTEGER,
    user_name: DataTypes.STRING,
    mainPost_id: DataTypes.INTEGER,
    post_title: DataTypes.STRING,
    comment: DataTypes.STRING,
    url: DataTypes.STRING,
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
