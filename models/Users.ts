"use strict";
import { DataTypes, Model, Association } from "sequelize";
// import { Comments } from "./Comments";
// import { Donors } from "./Donors";
// import { Likes } from "./Likes";
import { sequelize } from "./index";

interface UserAttributes {
  name: string;
  email: string;
  password: string;
  mobile: string;
  dateOfBirth: string;
  OAuth: boolean;
  url: string;
}

export class Users extends Model<UserAttributes> {
  public name!: string;
  public email!: string;
  public password!: string;
  public mobile!: string;
  public dateOfBirth!: string;
  public OAuth!: boolean;
  public url!: string;
}

Users.init(
  {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    mobile: DataTypes.STRING,
    dateOfBirth: DataTypes.STRING,
    OAuth: DataTypes.TINYINT, //boolean
    url: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "Users",
  }
);

// Users.hasMany(Comments),
//   {
//     sourceKey: "id",
//     foreignKey: "user_id",
//   };

// Users.hasMany(Donors),
//   {
//     sourceKey: "id",
//     foreignKey: "user_id",
//   };

// Users.hasMany(Likes),
//   {
//     sourceKey: "id",
//     foreignKey: "user_id",
//   };
