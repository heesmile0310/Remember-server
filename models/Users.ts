"use strict";
import { DataTypes, Model, Association } from "sequelize";
import { sequelize } from "./index";

interface UserAttributes {
  name: string;
  email: string;
  password: string;
  mobile: string;
  dateOfBirth: string;
  OAuth: boolean;
}

export class Users extends Model<UserAttributes> {
  public name!: string;
  public email!: string;
  public password!: string;
  public mobile!: string;
  public dateOfBirth!: string;
  public OAuth!: boolean;
}

Users.init(
  {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    mobile: DataTypes.STRING,
    dateOfBirth: DataTypes.STRING,
    OAuth: DataTypes.TINYINT, //boolean
  },
  {
    sequelize,
    modelName: "Users",
  }
);

// import {
//   Sequelize,
//   DataTypes,
//   Model,
//   Optional,
//   HasManyGetAssociationsMixin,
//   HasManyAddAssociationMixin,
//   HasManyHasAssociationMixin,
//   HasManyCountAssociationsMixin,
//   HasManyCreateAssociationMixin,
//   Association,
// } from "sequelize";
// import { sequelize } from "./index"; //방금 만들어주었던 sequelize객체 임포트

// // These are all the attributes in the User model
// interface UsersAttributes {
//   // id: number | null;
//   name: string;
//   email: string;
//   password: string;
//   mobile: string;
//   dateOfBirth: string;
// }

// export class Users extends Model<UsersAttributes> {
//   public readonly id: number; //굳이 안넣어줘도 될 것 같지만 공식문서에 있으니깐 일단 넣어줌.
//   public name: string;
//   public email: string;
//   public password: string;
//   public mobile: string;
//   public dateOfBirth: string;

//   // timestamps!
//   public readonly createdAt!: Date; //굳이 안넣어줘도 될 것 같지만 공식문서에 있으니깐 일단 넣어줌.
//   public readonly updatedAt!: Date; //굳이 안넣어줘도 될 것 같지만 공식문서에 있으니깐 일단 넣어줌.

//여기는 안넣어줘도 일단 오류는 나지 않는다. 더 알아보고 나중에 업데이트 하겠다. 혹시 모르니깐-----
// // Since TS cannot determine model association at compile time
// // we have to declare them here purely virtually
// // these will not exist until `Model.init` was called.
// public getScores!: HasManyGetAssociationsMixin<Scores>; // Note the null assertions!
// public addScores!: HasManyAddAssociationMixin<Scores, number>;
// public hasScores!: HasManyHasAssociationMixin<Scores, number>;
// public countScores!: HasManyCountAssociationsMixin;
// public createScores!: HasManyCreateAssociationMixin<Scores>;

// // // You can also pre-declare possible inclusions, these will only be populated if you
// // // actively include a relation.
// // public readonly projects?: Project[]; // Note this is optional since it's only populated when explicitly requested in code

// public static associations: {
//     userHasManyScores: Association<Users, Scores>;
// };
// }
//----------------------------
// Users.init(
//   {
//       name : {
//           type : DataTypes.STRING(45),
//           allowNull: false
//       },
//       email : {
//           type : DataTypes.STRING(45),
//           allowNull: false,
//       },
//       password : {
//           type : DataTypes.STRING(45),
//           allowNull : false
//       },
//       password : {
//           type : DataTypes.STRING(45),
//           allowNull : false
//       },
//       dateOfBirth : {
//           type : DataTypes.STRING(45),
//           allowNull : false
//       }
//   },
//   {
//       modelName : 'Users',
//       tableName : 'Users',
//       sequelize,
//       freezeTableName : true,
//       timestamps : true,
//       updatedAt : 'updateTimestamp'
//   }
// )

// Users.hasMany(Scores, {
//   sourceKey : "id",
//   foreignKey : "user_id",
//   as : 'userHasManyScores'
// });
