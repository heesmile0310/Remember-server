const express = require("express");
const signUpRouter = express.Router();
import { Request, Response, Application } from "express";

const { signUpController } = require("../controllers/signUpController");

signUpRouter.post("/login", (req: Request, res: Response) => {
  signUpController;
});

export default signUpRouter;
