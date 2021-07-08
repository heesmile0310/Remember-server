import { Request, Response } from "express";
require("dotenv").config();
const nodemailer = require("nodemailer");

const nodemailerController = {
  sendAuthController: async (req: Request, res: Response) => {
    const { mail } = req.body;

    var authenNum = Math.floor(Math.random() * 1000000) + 100000;
    if (authenNum > 1000000) {
      authenNum = authenNum - 100000;
    }
    console.log(authenNum);

    const email = nodemailer.createTransport({
      //메일트랩
      service: "gmail",
      host: "smtp.gmail.com",
      port: 2525,
      secure: false,
      auth: {
        user: process.env.service_email,
        pass: process.env.service_pass,
      },
    });

    const content = await email.sendMail({
      from: "Remember-service@gmail.com",
      to: `${mail}`,
      subject: "Login to Remember",
      html: `
      <style>

      </style>
        <p style="text-align: center;"><span style="font-size: 36px;"><strong>Remember</strong></span></p>
        <hr>
        <p style="text-align: center;">Welcome to Remember</p>
        <p style="text-align: left;"><span style="font-size: 20px;">이메일 인증 코드</span></p>
        <p><span style='color: rgb(0, 0, 0); font-family: -apple-system, BlinkMacSystemFont, "Malgun Gothic", "맑은 고딕", helvetica, "Apple SD Gothic Neo", helvetica, "나눔바른고딕 옛한글", "NanumBarunGothic YetHangul", sans-serif; font-size: 13px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;'>잊지 말아야 할 일들 그리고 잊혀가는 일들을 단순히 후원 한 번에 그치지 않고, 잊히지 않게 하기 위한 서비스,</span></p>
        <p style="text-align: left; line-height: 1;"><span style='color: rgb(0, 0, 0); font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"; font-size: 15px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; float: none; display: inline !important;'><strong>Remember</strong></span><span style='color: rgb(0, 0, 0); font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"; font-size: 13px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; float: none; display: inline !important;'>&nbsp;가입하신 것을 환영합니다.</span></p>
        <p style="text-align: left; line-height: 1;"><span style='color: rgb(0, 0, 0); font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"; font-size: 13px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; float: none; display: inline !important;'>아래의 인증코드를 입력하시면 가입이 정상적으로 완료됩니다.</span></p>
        <main style="text-align: left; line-height: 1;"><br></main>
        <p><span style="font-size: 36px; background-color: rgb(209, 213, 216);">766776</span></p>
        <p><br></p>
        <p style="text-align: left; line-height: 1;">
          <font face="-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji"><span style="font-size: 13px; background-color: rgb(255, 255, 255);">리멤버는 어떻게 개발되었는지 궁금하시다면?</span></font>
        </p>
        <p style="text-align: left; line-height: 1;">
          <font face="-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji"><span style="font-size: 13px; background-color: rgb(255, 255, 255);">아래 링크를 참고해주세요!</span></font>
        </p>
        <ul>
          <li style="text-align: left; line-height: 1;">
              <font face="-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji"><span style="font-size: 13px; background-color: rgb(255, 255, 255);">Remember Client</span></font>
          </li>
          <li style="text-align: left; line-height: 1;">
              <font face="-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji"><span style="font-size: 13px; background-color: rgb(255, 255, 255);">Remember Server</span></font>
          </li>
        </ul>
        <p>
            <font face="-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji"><span style="font-size: 13px; background-color: rgb(255, 255, 255);"><br></span></font>
        </p>
        <hr>
        <p><span style="font-size: 10px;">본 메일은 발신전용이며, 문의에 대한 회신은 처리되지 않습니다. 추가로 리멤버 서비스에 궁금하신 점이나 불편한 사항은 위 링크를 들어가 연락주시면 도움드리겠습니다.</span></p>
      `,
    });

    res.status(200).send({ data: authenNum });
  },
};

export default nodemailerController;
