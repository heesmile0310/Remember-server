//오아스로 로그인 할 때 정보들 테이블에 정보

import { Request, Response } from "express";
import { Users } from "../models/Users";
const OAuthInfoController = {
  OAuthInfoController: async (req: Request, res: Response) => {
    console.log(req.body);

    const email = req.body.email;
    const name = req.body.name;

    const userInfo = await Users.findOne({
      where: { email: email },
    });

    if (!userInfo) {
      await Users.create({
        name: name,
        email: email,
        password: null,
        mobile: null,
        dateOfBirth: null,
        OAuth: true,
      });
    } else {
      console.log("welcome");
    }
  },
};
export default OAuthInfoController;

// const OAuthInfoController = {
//   OAuthInfoController: async (req: Request, res: Response) => {
//     const authorization = req.headers.authorization;
//     const OAuthType = authorization.split(" ")[2];
//     const token = authorization.split(" ")[1];

//     if (OAuthType === "Google") {
//       const googleInfoURL = "https://www.googleapis.com/oauth2/v3/userinfo";
//       const userInfo = await axios
//         .get(googleInfoURL, {
//           headers: {
//             authorization: `Bearer ${token}`,
//           },
//         })
//         .then((result) => result.data.email)
//         .catch((err) => {
//           console.log(err.message);
//         });
//       const check = Users.findOne({
//         where: { email: userInfo.email },
//       });
//     }
//   },
// };

// 이름, 이메일, token, type
// Oauth 는 구글이나 깃허브면 테이블 컬럼에 true/false check
