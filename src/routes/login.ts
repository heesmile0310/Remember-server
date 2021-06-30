const express = require("express");
const loginRouter = express.Router();
import { Request, Response, Application } from "express";

const { loginController } = require("../controllers/loginController");

loginRouter.post("/login", (req: Request, res: Response) => {
  loginController;
});

export default loginRouter;
