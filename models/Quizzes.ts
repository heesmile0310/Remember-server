"use strict";
import { DataTypes, Model, Association } from "sequelize";
import { sequelize } from "./index";

interface QuizAttributes {
  quiz: string | null;
  correct: string | null;
  wrong: string | null;
  boolean: boolean | null;
}

export class Quizzes extends Model<QuizAttributes> {
  public quiz!: string | null;
  public correct!: string | null;
  public wrong!: string | null;
  public boolean!: boolean | null;
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
