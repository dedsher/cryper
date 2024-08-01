import { ContainerModule, interfaces } from "inversify";
import { interfaces as expressInterfaces } from "inversify-express-utils";
import { IUserService } from "./interfaces";
import { UserService } from "./";
import { UserController } from "./";
import { TYPES } from "@shared/config";

const UserModule = new ContainerModule((bind: interfaces.Bind) => {
  bind<IUserService>(TYPES.UserService).to(UserService);
  bind<expressInterfaces.Controller>(TYPES.UserController).to(UserController);
});

export default UserModule;
