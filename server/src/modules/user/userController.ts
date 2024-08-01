import { controller, interfaces } from "inversify-express-utils";
import { Request, Response, NextFunction } from "express";
import { inject } from "inversify";
import { IUserService } from "./interfaces";
import { TYPES } from "@shared/config";

@controller("/user")
export default class UserController implements interfaces.Controller {
  constructor(@inject(TYPES.UserService) private userService: IUserService) {}

  public async get(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    res.json({ id: 1, name: "John Doe" });
  }
}
