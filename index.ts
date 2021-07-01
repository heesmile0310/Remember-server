import cors from "cors";
import "dotenv/config";
import express, { Request, Response, NextFunction } from "express";
const PORT = process.env.DATABASE_PORT;
const cookieParser = require("cookie-parser");

class App {
  public application: express.Application;

  constructor() {
    this.application = express();
  }
}

const app = new App().application;

const corsOption = {
  Headers: { "content-type": "application/json" },
  origin: true,
  method: ["post", "get", "delete", "options"],
  credentials: true,
  // preflightContinue: true,
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
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors(corsOption));
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

app.get("/", (req: Request, res: Response) => {
  res.status(201).send("hello remember~");
});
export default app;

// import * as dotenv from "dotenv";
// import express, { Request, Response, NextFunction } from "express";
// import cors from "cors";
// import { sequelize } from "./models"; //방금 만든 sequelize객체를 import해준다.(index.ts에 만들었으므로 폴더명만 입력하면 먼저 자동으로 index.ts를 찾아 그 안에 있는거 import)
// import loginController from "./controllers/loginController";
// dotenv.config();
// /**
//  * App Variables
//  */
// const PORT: number = parseInt(process.env.DATABASE_PORT as string, 10) || 5000;
// const HOST: string = process.env.DATABASE_HOST || "localhost";
// const app = express();

// /**
//  *  App Configuration   //middleware
//  */
// app.use(cors());
// app.use(express.json());
// // app.use((req: Request, res: Response, next: NextFunction) => {
// //   console.log(`Request Occur! ${req.method}, ${req.url}`);
// //   next();
// // });

// app.post("/login", loginController.loginController);

// /**
//  * Server Activation
//  */
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
