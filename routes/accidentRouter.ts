import express from "express";
import * as controller from "../controllers/controller";
const router = express.Router();

router.get("/list", controller.mainpage.mainpageController);
router.get("/:id", controller.mainpage.mainpageSingleController);
export default router;
