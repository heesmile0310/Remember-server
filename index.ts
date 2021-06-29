const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const http = require("http");
import { Request, Response, Application } from "express";
// const app = express();

// const loginController = require("./src/controllers/loginController");
// const logingithubController = require("./src/controllers/logingithubController");
// const logingoogleController = require("./src/controllers/logingoogleController");
import "reflect-metadata";
import { createConnection } from "typeorm";

//db 연결
createConnection()
  .then(() => {
    console.log(`DB connected!`);
  })
  .catch((error) => console.log(error));

class App {
  public application: Application;
  constructor() {
    this.application = express();
  }
}
const app = new App().application;

const port = 80;
const ip = "127.0.0.1";
const server = http.createServer(app);
console.log("Listening on http://" + ip + ":" + port);
server.listen(port);

app.use(bodyParser.json());
app.use(express.json());
app.use(
  cors({
    origin: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// app.post("/login", loginController);
// app.post("/githublogin", logingithubController);
// app.post("/googlelogin", logingoogleController);

app.get("/", (req: Request, res: Response) => {
  res.status(201).send("ㅎㅇ염 ㅎㅎ ");
});

module.exports = app;
