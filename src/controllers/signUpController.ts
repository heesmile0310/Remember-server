// import { Request, Response } from "express";
// //const { users } = require("../entity/users");
// import users from "../entity/users";

// module.exports = {
//   signupController: async (req: Request, res: Response) => {
//     const { email, password, name, mobile, dateOfBirth } = req.body;

//     if (!email || !password || !name || !mobile || !dateOfBirth) {
//       return res.status(422).send("please fill in all the blanks");
//     } else {
//       const emailCheck = await users.findOne({
//         where: { email: email },
//       });
//       //이미 사용중인 이메일인지 확인합니다
//       if (emailCheck) {
//         res.status(409).send("email exists");
//       } else {
//         users.create({
//           email: email,
//           password: password,
//           name: name,
//           mobile: mobile,
//         });
//         res.sendStatus(201);
//       }
//     }
//   },
// };
