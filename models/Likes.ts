"use strict";
import { DataTypes, Model, Association } from "sequelize";
import { sequelize } from "./index";
import { MainPosts } from "./MainPosts";
import { Users } from "./Users";

interface LikeAttributes {
  user_id: number;
  mainPost_id: number;
  likeCount: number;
}

export class Likes extends Model<LikeAttributes> {
  public user_id!: number;
  public mainPost_id!: number;
  public likeCount!: number;
}

Likes.init(
  {
    user_id: DataTypes.INTEGER,
    mainPost_id: DataTypes.INTEGER,
    likeCount: DataTypes.INTEGER,
  },
  {
    sequelize,
    modelName: "Likes",
  }
);

Likes.hasMany(Users, {
  foreignKey: "user_id",
  sourceKey: "id",
});

Likes.hasMany(MainPosts, {
  foreignKey: "mainPost_id",
  sourceKey: "id",
});
