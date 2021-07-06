import { DataTypes, Model, Association } from "sequelize";
import { sequelize } from "./index";

interface TodayAttributes {
  visited: number;
  todayDate: string;
}

export class Todays extends Model<TodayAttributes> {
  public visited!: number;
  public todayDate!: string;
}

Todays.init(
  {
    visited: DataTypes.INTEGER,
    todayDate: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "Todays",
  }
);
