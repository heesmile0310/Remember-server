import express from "express";
import cors from "cors";
import "dotenv/config";
// route 적용
import router from "./routes";

let corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};

const createApp = () => {
  const app = express();
  app.use(cors(corsOptions));

  app.use(express.json());
  app.use(router);

  app.get("/", (req, res) => {
    res.status(200).send("hehe");
  });

  return app;
};

export default createApp;
