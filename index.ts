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
import mainpageController from "./controllers/mainpageController";
import commentController from "./controllers/commentController";
import likeController from "./controllers/likeController";
import quizController from "./controllers/quizController";
import todayController from "./controllers/todayController";
import nodemailerController from "./controllers/nodemailerController";

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
const port = 8080;
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
app.get("/mypage", mypageController.getMypageController); //Mypage 일반 로그인
app.post("/mypage", mypageController.postMypageController); // Mypage 소셜 로그인
app.put("/update-user", updateUserController.updateUserController);
app.post("/withdraw", withdrawController.withdrawController);
app.get("/mainpage", mainpageController.mainpageController);
app.post("/comment", commentController.commentController);
app.post("/comment-list", commentController.commentListController);
app.put("/put-like", likeController.putLikeController);
app.post("/post-like", likeController.postLikeController);
app.get("/quiz", quizController.quizController);
app.post("/today", todayController.todayController);
app.post("/mail", nodemailerController.sendAuthController);

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
