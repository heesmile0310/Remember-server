"use strict";
import { DataTypes, Model, Association } from "sequelize";
import { sequelize } from "./index";

interface MainPostAttributes {
  title: string; //제목
  casualty: string; //희생자수
  date: string; //발생 일자
  location: string; //발생 위치
  body: string; //본문 내용 (자세히 보기 후 사용)
  url: string; // 이미지 url
  targetAmount: number; // 후원 목표액 (값이 달라질 수 있음)
}

export class MainPosts extends Model<MainPostAttributes> {
  public title!: string;
  public casualty!: string;
  public date!: string;
  public location!: string;
  public body!: string;
  public url!: string;
  public targetAmount!: number;
}

MainPosts.init(
  {
    title: DataTypes.STRING,
    casualty: DataTypes.STRING,
    date: DataTypes.STRING,
    location: DataTypes.STRING,
    body: DataTypes.STRING,
    url: DataTypes.STRING,
    targetAmount: DataTypes.INTEGER,
  },
  {
    sequelize,
    modelName: "MainPosts",
  }
);
