import express from "express";
import * as controller from "../controllers/controller";
const router = express.Router();

router.post("/login", controller.login.loginController);
router.post("/signup", controller.signup.signupController);
router.get("/mypage", controller.mypage.getMypageController);
router.post("/mypage", controller.mypage.postMypageController);
router.delete("/withdraw", controller.withdraw.withdrawController);
router.post("/oauth-info", controller.OAuthInfo.OAuthInfoController); //api 추가하기
router.put("/updateinfo", controller.updateUser.updateUserController);

export default router;
