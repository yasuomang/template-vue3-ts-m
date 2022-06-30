import { IResponse } from '../common/types';
export interface ILoginParams {
  userName: string;
  passWord: string | number;
}
export interface ILoginResponse {
  createTime: number;
  userId: number;
  uuid: string;
}
export interface ILoginApi {
  login: <T = ILoginResponse, D = ILoginParams>(
    params: D
  ) => Promise<IResponse<T>>;
}
