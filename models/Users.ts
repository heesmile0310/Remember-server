"use strict";
import { DataTypes, Model, Association } from "sequelize";
// import { Comments } from "./Comments";
// import { Donors } from "./Donors";
// import { Likes } from "./Likes";
import { sequelize } from "./index";

interface UserAttributes {
  name: string | null;
  email: string | null;
  password: string | null;
  mobile: string | null;
  dateOfBirth: string | null;
  OAuth: boolean | null;
  url: string | null;
}

export class Users extends Model<UserAttributes> {
  public name!: string | null;
  public email!: string | null;
  public password!: string | null;
  public mobile!: string | null;
  public dateOfBirth!: string | null;
  public OAuth!: boolean | null;
  public url!: string | null;
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
