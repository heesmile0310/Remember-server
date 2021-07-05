import express from "express";
import cors from "cors";
import "dotenv/config";

//controller 불러오기
import loginController from "./controllers/loginController";
import signupController from "./controllers/signupController";
import OAuthInfoController from "./controllers/OAuthInfoController";
import mypageController from "./controllers/mypageController";
import updateUserController from "./controllers/updateUserController";

import withdrawController from "./controllers/withdrawController";


const bodyParser = require("body-parser");

const http = require("http");
const PORT = process.env.DATABASE_PORT;
const cookieParser = require("cookie-parser");

class App {
  public application: express.Application;

  constructor() {
    this.application = express();
  }
}

const app = new App().application;
app.use(bodyParser.json());
const port = 80;
const ip = "127.0.0.1";
const server = http.createServer(app);
server.listen(port);
const corsOption = {
  Headers: { "content-type": "application/json" },
  origin: true,
  method: ["post", "get", "delete", "options", "put"],
  credentials: true,
  preflightContinue: true,
};

app.use((req, res, next) => {
  next();
}, cors(corsOption));
app.options(
  "*",
  (req, res, next) => {
    next();
  },
  cors(corsOption)
);

// Controller 적용
app.post("/login", loginController.loginController);
app.post("/signup", signupController.signupController);
app.post("/oauth-info", OAuthInfoController.OAuthInfoController); //api 추가하기
app.get("/mypage", mypageController.mypageController);

app.put("/update-user", updateUserController.updateUserController);

app.delete("./withdraw", withdrawController.withdrawController);

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors(corsOption));
app.use(express.json());
app.get("/", (req, res) => {
  res.status(200).send("hehe");
});
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

export default app;

// import express from "express";
// import cors from "cors";
// import bodyParser from "body-parser";
// import http from "http";
// //주석입니다
// import { Request, Response, Application } from "express";
// import "reflect-metadata";
// import { sequelize } from "./models"; //시퀄라이즈 객체
// const dotenv = require("dotenv");
// dotenv.config();

// class App {
//   public application: Application;
//   constructor() {
//     this.application = express();
//   }
// }

// const PORT: number = parseInt(process.env.DATABASE_PORT) || 80;
// const HOST: string = process.env.DATABASE_HOST || "localhost";
// const app = new App().application;

// const port = 80;
// const ip = "127.0.0.1";
// const server = http.createServer(app);
// console.log("Listening on http://" + ip + ":" + port);
// server.listen(port);

// app.listen(PORT, HOST, async () => {
//   console.log(`Server Listening on ${HOST}:${PORT}`);

//   // //sequelize-db 연결 테스트
//   await sequelize
//     .authenticate()
//     .then(async () => {
//       console.log("connection success");
//     })
//     .catch((e) => {
//       console.log("TT : ", e);
//     });
// });

// app.use(bodyParser.json());
// app.use(express.json());
// app.use(
//   cors({
//     origin: true,
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     credentials: true,
//   })
// );

// app.get("/", (req: Request, res: Response) => {
//   res.status(201).send("hello remember~");
// });

// module.exports = app;
