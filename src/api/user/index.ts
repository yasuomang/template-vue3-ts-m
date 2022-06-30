import { HttpMethod } from '../index';
import { IUserApi } from './types';

const userApi: IUserApi = {
  getUserList(params) {
    return HttpMethod.get('v2/user', params);
  },
};
export default userApi;
