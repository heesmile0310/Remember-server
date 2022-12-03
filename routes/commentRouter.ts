import express from "express";
import * as controller from "../controllers/controller";
const router = express.Router();

router.post("", controller.comment.commentController);
router.get("/list", controller.comment.commentListController);

export default router;
