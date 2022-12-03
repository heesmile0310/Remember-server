import express from "express";
import * as controller from "../controllers/controller";
const router = express.Router();

router.post("/info", controller.mainpage.mainpageDonationController);
router.post("/payment", controller.payment.paymentController);

export default router;
