"use strict";
import { DataTypes, Model, Association } from "sequelize";
import { sequelize } from "./index";

interface MainPostAttributes {
  title: string;
  body: string;
  targetAmount: number;
}

export class MainPosts extends Model<MainPostAttributes> {
  public title!: string;
  public body!: string;
  public targetAmount!: number;
}

MainPosts.init(
  {
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    targetAmount: DataTypes.INTEGER,
  },
  {
    sequelize,
    modelName: "MainPosts",
  }
);
