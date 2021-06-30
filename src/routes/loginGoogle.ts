const express = require("express");
const loginGoogleRouter = express.Router();

const {
  loginGoogleController,
} = require("../controllers/loginGoogleController");

loginGoogleRouter.post("/google-login", loginGoogleController);

export default loginGoogleRouter;
