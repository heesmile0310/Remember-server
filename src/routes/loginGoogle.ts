const express = require("express");
const loginGoogleRouter = express.Router();
import { Request, Response, Application } from "express";

const {
  loginGoogleController,
} = require("../controllers/loginGoogleController");

loginGoogleRouter.post("/google-login", (req: Request, res: Response) => {
  loginGoogleController;
});
export default loginGoogleRouter;
