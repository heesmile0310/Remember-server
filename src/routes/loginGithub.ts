import * as express from "express";
const loginGithubRouter = express.Router();
import { Request, Response, Application } from "express";

import loginGithubController from "../controllers/loginGithubController";

loginGithubRouter.post("/github-login", (req: Request, res: Response) => {
  loginGithubController;
});

export default loginGithubRouter;
