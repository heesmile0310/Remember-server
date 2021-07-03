import { Request, Response } from "express";
import { Users } from "../models/Users";

const updateUserController = {
  updateUserController: async (req: Request, res: Response) => {
    const { password, mobile, dateOfBirth, email } = req.body;

    const userInfo = await Users.findOne({
      where: { email: email },
    });

    await Users.update(
      {
        password: password,
        mobile: mobile,
        dateOfBirth: dateOfBirth,
      },
      {
        where: { email: userInfo.email },
      }
    );
  },
};

export default updateUserController;
