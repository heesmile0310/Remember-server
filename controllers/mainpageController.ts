import { Request, Response } from "express";
import { MainPosts } from "../models/MainPosts";

const mainpageController = {
  mainpageController: async (req: Request, res: Response) => {
    const posts = await MainPosts.findAll();

    res.status(200).send({ data: posts });
  },

  mainpageSingleController: async (req: Request, res: Response) => {
    const post = await MainPosts.findByPk(req.params.id);
    if (!post) {
      return res.status(404).json({ msg: "Post not found" });
    }
    res.status(200).send({ data: post });
  },
};

export default mainpageController;
