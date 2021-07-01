const dotenv = require("dotenv");
dotenv.config();
//module.exports
export const config = {
  development: {
    username: process.env.DATABASE_USERNAME || "root",
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME || "typescript_test",
    host: process.env.DATABASE_HOST || "localhost",
    port: process.env.DATABASE_PORT || 80,
    dialect: "mysql",
  },
  test: {
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    dialect: "mysql",
  },
  production: {
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    dialect: "mysql",
  },
};
