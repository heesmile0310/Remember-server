import { Request, Response } from "express";
import { Comments } from "../models/Comments";
import { Users } from "../models/Users";
import { MainPosts } from "../models/MainPosts";
import { create } from "domain";
import { url } from "inspector";

const commentController = {
  commentController: async (req: Request, res: Response) => {
    const { name, comment, post_title, url } = req.body;
    await Comments.create({
      user_id: null,
      user_name: name,
      mainPost_id: null,
      post_title: post_title,
      comment: comment,
      url: null,
    });
  },

  commentListController: async (req: Request, res: Response) => {
    const { post_title, user_name } = req.body;
    const commentInfo = await Comments.findAll({
      where: { post_title: post_title },
    });
    res.status(200).send({ data: { commentInfo } });
  },
};

export default commentController;
