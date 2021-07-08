"use strict";
import { DataTypes, Model, Association } from "sequelize";
import { sequelize } from "./index";

interface MainPostAttributes {
  title: string | null; //제목
  casualty: string | null; //희생자수
  date: string | null; //발생 일자
  location: string | null; //발생 위치
  body: string | null; //본문 내용 (자세히 보기 후 사용)
  url: string | null; // 이미지 url
  targetAmount: number | null; // 후원 목표액 (값이 달라질 수 있음)
}

export class MainPosts extends Model<MainPostAttributes> {
  public title!: string | null;
  public casualty!: string | null;
  public date!: string | null;
  public location!: string | null;
  public body!: string | null;
  public url!: string | null;
  public targetAmount!: number | null;
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
