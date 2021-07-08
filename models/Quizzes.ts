"use strict";
import { DataTypes, Model, Association } from "sequelize";
import { sequelize } from "./index";

interface QuizAttributes {
  quiz: string;
  correct: string;
  wrong: string;
  boolean: boolean;
}

export class Quizzes extends Model<QuizAttributes> {
  public quiz!: string;
  public correct!: string;
  public wrong!: string;
  public boolean!: boolean;
}

Quizzes.init(
  {
    quiz: DataTypes.STRING,
    correct: DataTypes.STRING,
    wrong: DataTypes.STRING,
    boolean: DataTypes.TINYINT,
  },
  {
    sequelize,
    modelName: "Quizzes",
  }
);
