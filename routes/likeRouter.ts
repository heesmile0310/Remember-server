import express from "express";
import * as controller from "../controllers/controller";
const router = express.Router();

router.put("", controller.like.putLikeController);
router.post("", controller.like.postLikeController);

export default router;
