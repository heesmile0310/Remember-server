"use strict";
import { DataTypes, Model, Association } from "sequelize";
import { sequelize } from "./index";

interface QuizAttributes {
  quiz: string;
}

export class Quizzes extends Model<QuizAttributes> {
  public quiz!: string;
}

Quizzes.init(
  {
    quiz: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "Quizzes",
  }
);
