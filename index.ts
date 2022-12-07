import express from "express";
import cors from "cors";
import "dotenv/config";
import morgan from "morgan";

// route 적용
import router from "./routes";

let corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};

const createApp = () => {
  const app = express();
  app.use(cors(corsOptions));

  app.use(morgan());
  app.use(express.json());
  app.use(router);

  app.get("/", (req, res) => {
    res.status(200).send("hehe");
  });
  app.use((err, req, res, next) => {
    const { status, message } = err;
    console.error(err);
    res.status(status || 500).json({ message });
  });

  return app;
};

export default createApp;
