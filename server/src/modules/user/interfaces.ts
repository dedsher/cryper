export interface IUser {
    id: number;
    name: string;
}

export interface IUserService {
    getUserById(id: number): Promise<IUser>;
    createUser(user: IUser): Promise<IUser>;
    updateUser(user: IUser): Promise<IUser>;
    deleteUser(id: number): Promise<IUser>;
  }

export interface IUserController {
    getUserById(id: number): Promise<IUser>;
    createUser(user: IUser): Promise<IUser>;
    updateUser(user: IUser): Promise<IUser>;
    deleteUser(id: number): Promise<IUser>;
}