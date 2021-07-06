import { Request, Response } from "express";
import { Todays } from "../models/Todays";

const todayController = {
  todayController: async (req: Request, res: Response) => {
    const { check } = req.body;

    const todayVisited = await Todays.findOne({
      where: { todayDate: check },
    });

    if (!todayVisited) {
      // 새로운 날짜
      const TodayNumber = await Todays.create({
        visited: 1,
        todayDate: check,
      });
      res.status(200).send({ data: TodayNumber.visited });
    } else {
      // 기존 날짜

      const TodayNumber = await Todays.increment("visited", {
        where: { todayDate: check },
      });
      res.status(200).send({ data: TodayNumber.visited });
    }
  },
};

export default todayController;
