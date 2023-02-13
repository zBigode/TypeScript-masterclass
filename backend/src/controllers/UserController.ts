import { Request, Response } from "express";
import EmailService from "../services/Emailservice";

const users = [
  {
    name: "Marcos",
    email: "marcos07gabriel@gmail.com",
  },
  {
    name: "lucas",
    email: "lucas@gmail.com",
  },  {
    name: "ronaldo",
    email: "ronaldo@gmail.com",
  },
];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },

  async create(req: Request, res: Response) {
    const emailService = new EmailService();
    emailService.sendMail({
      to: { name: "Marcos", email: "marcos07gabriel@gmail.com" },
      message: { subject: "arroz feijao e batata", body: "o que falta?" },
    });
    return res.send();
  },
};
