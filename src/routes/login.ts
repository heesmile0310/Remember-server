import * as express from "express";
const loginRouter = express.Router();
import { Request, Response, Application } from "express";

import * as loginController from "../controllers/loginController";

loginRouter.post("/login", (req: Request, res: Response) => {
  loginController;
});

export default loginRouter;
