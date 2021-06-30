import * as express from "express";
const signUpRouter = express.Router();
import { Request, Response, Application } from "express";

import signUpController from "../controllers/signUpController";

signUpRouter.post("/login", (req: Request, res: Response) => {
  signUpController;
});

export default signUpRouter;
