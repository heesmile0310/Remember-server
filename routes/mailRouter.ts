import express from "express";
import * as controller from "../controllers/controller";
const router = express.Router();

router.post("", controller.mail.sendAuthController);
router.post("/receipt", controller.mail.sendreceiptController);

export default router;
