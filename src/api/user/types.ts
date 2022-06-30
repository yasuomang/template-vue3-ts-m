import { IResponse } from '../common/types';
export interface IGetUserParams {
  userName: string;
  passWord: string | number;
}
export interface IGetUserResponse {
  createTime: number;
  userId: number;
  uuid: string;
}
export interface IUserApi {
  getUserList: (
    params?: IGetUserResponse
  ) => Promise<IResponse<IGetUserParams[]>>;
}
