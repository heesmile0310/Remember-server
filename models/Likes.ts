"use strict";
import { DataTypes, Model, Association } from "sequelize";
import { sequelize } from "./index";
import { MainPosts } from "./MainPosts";
import { Users } from "./Users";

interface LikeAttributes {
  user_id: number;
  user_name: string;
  mainPost_id: number | null;
  post_title: string;
  likeStatus: boolean;
}

export class Likes extends Model<LikeAttributes> {
  public user_id!: number | null;
  public user_name!: string;
  public mainPost_id!: number | null;
  public post_title!: string;
  public likeStatus!: boolean;
}

Likes.init(
  {
    user_id: DataTypes.INTEGER,
    user_name: DataTypes.STRING,
    mainPost_id: DataTypes.INTEGER,
    post_title: DataTypes.STRING,
    likeStatus: DataTypes.TINYINT,
  },
  {
    sequelize,
    modelName: "Likes",
  }
);

// Likes.hasMany(Users, {
//   foreignKey: "user_id",
//   sourceKey: "id",
// });

// Likes.hasMany(MainPosts, {
//   foreignKey: "mainPost_id",
//   sourceKey: "id",
// });
