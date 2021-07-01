import { Request, Response } from "express";
import { Users } from "../models/Users";

const loginController = {
  loginController: async (req: Request, res: Response) => {
    const { email } = req.body;
    const userInfo = await Users.findOne({
      where: { email: email },
    });
    console.log(userInfo);
    console.log("hi");
  },
};
export default loginController;
