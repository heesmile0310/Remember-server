"use strict";
import { DataTypes, Model, Association } from "sequelize";
import { sequelize } from "./index";
import { MainPosts } from "./MainPosts";
import { Users } from "./Users";

interface DonorAttributes {
  user_id: number;
  user_name: string;
  mainPost_id: number;
  donationAmount: number;
}

export class Donors extends Model<DonorAttributes> {
  public user_id!: number;
  public user_name!: string;
  public mainPost_id!: number;
  public donationAmount!: number;
}

Donors.init(
  {
    user_id: DataTypes.INTEGER,
    user_name: DataTypes.STRING,
    mainPost_id: DataTypes.INTEGER,
    donationAmount: DataTypes.INTEGER,
  },
  {
    sequelize,
    modelName: "Donors",
  }
);

Donors.hasMany(Users, {
  foreignKey: "user_id",
  sourceKey: "id",
});

Donors.hasMany(MainPosts, {
  foreignKey: "mainPost_id",
  sourceKey: "id",
});
