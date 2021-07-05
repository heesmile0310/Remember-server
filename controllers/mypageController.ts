import { Request, Response } from "express";
import { Users } from "../models/Users";
import { Donors } from "../models/Donors";
const jwt = require("jsonwebtoken");
const accessSecret = process.env.ACCESS_SECRET;

const mypageController = {
  mypageController: async (req: Request, res: Response) => {
    const authorization = req.headers["authorization"];

    if (!authorization) {
      res.status(400).send({ data: null, message: "invalid access token" });
    } else {
      const token = authorization.split(" ")[1];
      const data = jwt.verify(token, accessSecret, (err, decoded) => {
        if (err) {
          return err.message;
        } else {
          return decoded;
        }
      });
      console.log(data.email);

      // const userInfo = await Users.findOne({
      //   where: { email: data.email, name: data.name },
      // });
      // const findUserId = await Users.findOne({
      //   where: { name: data.name },
      // });
      // const donorInfo = await Donors.findAll({
      //   where: { user_id: findUserId.name },
      // });

      // if (!userInfo) {
      //   res.status(400).send({ data: null, message: "access denied" });
      // } else {
      //   res
      //     .status(200)
      //     .json({ data: { userInfo, donorInfo }, message: "granted" }); // 유저 정보와 후원 내역 정보 보내드림.
      // }
    }
  },
};
export default mypageController;
