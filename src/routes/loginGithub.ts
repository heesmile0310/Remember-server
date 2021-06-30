const express = require("express");
const loginGithubRouter = express.Router();

const {
  loginGithubController,
} = require("../controllers/loginGithubController");

loginGithubRouter.post("/github-login", loginGithubController);

export default loginGithubRouter;
