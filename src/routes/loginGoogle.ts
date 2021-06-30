import * as express from "express";
const loginGoogleRouter = express.Router();
import { Request, Response, Application } from "express";

import loginGoogleController from "../controllers/loginGoogleController";

loginGoogleRouter.post("/google-login", (req: Request, res: Response) => {
  loginGoogleController;
});
export default loginGoogleRouter;
