"use strict";
import { DataTypes, Model, Association } from "sequelize";
import { sequelize } from "./index";
import { MainPosts } from "./MainPosts";
import { Users } from "./Users";

interface CommentAttributes {
  user_id: number;
  mainPost_id: number;
  comment: string;
}

export class Comments extends Model<CommentAttributes> {
  public user_id!: number;
  public mainPost_id!: number;
  public comment!: string;
}

Comments.init(
  {
    user_id: DataTypes.INTEGER,
    mainPost_id: DataTypes.INTEGER,
    comment: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "Comments",
  }
);

Comments.hasMany(Users, {
  foreignKey: "user_id",
  sourceKey: "id",
});

Comments.hasMany(MainPosts, {
  foreignKey: "mainPost_id",
  sourceKey: "id",
});
