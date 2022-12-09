import express from "express";

import userRouter from "./userRouter";
import accidentRouter from "./accidentRouter";
import commentRouter from "./commentRouter";
import likeRouter from "./likeRouter";
import mailRouter from "./mailRouter";
import supportRouter from "./supportRouter";
import quizRouter from "./quizRouter";
import todayRouter from "./todayRouter";

const router = express.Router();

router.use("/users", userRouter);
router.use("/accidents", accidentRouter);
router.use("/comment", commentRouter);
router.use("/like", likeRouter);
router.use("/mail", mailRouter);
router.use("/support", supportRouter);
router.use("/quiz", quizRouter);
router.use("/today", todayRouter);

export default router;
