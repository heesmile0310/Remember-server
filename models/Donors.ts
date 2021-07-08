"use strict";
import { DataTypes, Model, Association } from "sequelize";
import { sequelize } from "./index";
import { MainPosts } from "./MainPosts";
import { Users } from "./Users";

interface DonorAttributes {
  user_id: number | null;
  user_name: string | null;
  mainPost_id: number | null;
  donationAmount: number | null;
}

export class Donors extends Model<DonorAttributes> {
  public user_id!: number | null;
  public user_name!: string | null;
  public mainPost_id!: number | null;
  public donationAmount!: number | null;
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

// Donors.hasMany(Users, {
//   foreignKey: "user_id",
//   sourceKey: "id",
// });

// Donors.hasMany(MainPosts, {
//   foreignKey: "mainPost_id",
//   sourceKey: "id",
// });
