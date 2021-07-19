"use strict";
import { DataTypes, Model, Association } from "sequelize";
import { sequelize } from "./index";
import { MainPosts } from "./MainPosts";
import { Users } from "./Users";

interface DonorAttributes {
  user_id: number | null;
  user_email: string | null;
  user_name: string | null;
  mainPost_id: number | null;
  mainPost_title: string | null;
  donationAmount: number | null;
  receiptURL: string | null;
}

export class Donors extends Model<DonorAttributes> {
  public user_id!: number | null;
  public user_email!: string | null;
  public user_name!: string | null;
  public mainPost_id!: number | null;
  public mainPost_title!: string | null;
  public donationAmount!: number | null;
  public receiptURL!: string | null;
}

Donors.init(
  {
    user_id: DataTypes.INTEGER,
    user_email: DataTypes.STRING,
    user_name: DataTypes.STRING,
    mainPost_id: DataTypes.INTEGER,
    mainPost_title: DataTypes.STRING,
    donationAmount: DataTypes.INTEGER,
    receiptURL: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "Donors",
  }
);

// Donors.hasMany(Users, {
//   foreignKey: "user_id",
//   sourceKey: "id",
// });

// Donors.hasMany(MainPosts, {
//   foreignKey: "mainPost_id",
//   sourceKey: "id",
// });
