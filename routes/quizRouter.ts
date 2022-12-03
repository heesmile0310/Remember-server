import express from "express";
import * as controller from "../controllers/controller";
const router = express.Router();

router.get("", controller.quiz.quizController);

export default router;
