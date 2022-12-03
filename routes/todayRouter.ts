import express from "express";
import * as controller from "../controllers/controller";
const router = express.Router();

router.post("", controller.today.todayController);

export default router;
