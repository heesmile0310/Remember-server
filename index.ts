import express from "express";
import cors from "cors";
import "dotenv/config";
import morgan from "morgan";

// route 적용
import landingpageRouter from "./routes/landingpage";
import loginRouter from "./routes/login";
import mailRouter from "./routes/mail";
import mainpageRouter from "./routes/mainpage";
import postRouter from "./routes/post";
import userInfoRouter from "./routes/userInfo";
import withdrawRouter from "./routes/withdraw";

let corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};

const createApp = () => {
  const app = express();
  app.use(cors(corsOptions));

  app.use(morgan());
  app.use(express.json());
  // app.use(routes);
  app.use("/", landingpageRouter);
  app.use("/", loginRouter);
  app.use("/", mailRouter);
  app.use("/", mainpageRouter);
  app.use("/", postRouter);
  app.use("/", userInfoRouter);
  app.use("/", withdrawRouter);

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
