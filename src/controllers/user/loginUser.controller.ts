import { Request, Response } from "express";
import loginUserService from "../../services/user/loginUser.service";
import { errorHandler } from "../../errors";

const loginUserController = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const token = await loginUserService({ email, password });

    return res.status(200).json({ token });
  } catch (err) {
    if (err instanceof Error) {
      errorHandler(err, res);
    }
  }
};

export default loginUserController;
