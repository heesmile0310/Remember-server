import { DataTypes, Model, Association } from "sequelize";
import { sequelize } from "./index";

interface TodayAttributes {
  visited: number | null;
  todayDate: string | null;
}

export class Todays extends Model<TodayAttributes> {
  public visited!: number | null;
  public todayDate!: string | null;
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
