import { Request, Response } from "express";
import { Donors } from "../../models/Donors";

const paymentController = {
  paymentController: async (req: Request, res: Response) => {
    const { name, email, amount, title, receipt, accidentId } = req.body;
    await Donors.create({
      user_email: email,
      user_id: null,
      user_name: name,
      mainPost_id: accidentId,
      mainPost_title: title,
      donationAmount: amount,
      receiptURL: receipt || null,
    });
  },
};

export default paymentController;
