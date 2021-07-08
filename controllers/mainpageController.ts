import { Request, Response } from "express";
import { MainPosts } from "../models/MainPosts";

const mainpageController = {
  mainpageController: async (req: Request, res: Response) => {
    const posts = await MainPosts.findAll();

    res.status(200).send({ data: posts });
  },
};

export default mainpageController;
