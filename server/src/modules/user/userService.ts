import { IUser, IUserService } from "./interfaces";
import { injectable, inject } from "inversify";
import { TYPES } from "@shared/config";

@injectable()
class UserService implements IUserService {
  public async getUserById(id: number): Promise<IUser> {
    return { id, name: "John Doe" };
  }

  public async createUser(user: IUser): Promise<IUser> {
    return user;
  }

  public async updateUser(user: IUser): Promise<IUser> {
    return user;
  }

  public async deleteUser(id: number): Promise<IUser> {
    return { id, name: "John Doe" };
  }
}

export default UserService;
