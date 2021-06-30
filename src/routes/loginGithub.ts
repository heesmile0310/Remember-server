const express = require("express");
const loginGithubRouter = express.Router();
import { Request, Response, Application } from "express";

const {
  loginGithubController,
} = require("../controllers/loginGithubController");

loginGithubRouter.post("/github-login", (req: Request, res: Response) => {
  loginGithubController;
});

export default loginGithubRouter;
