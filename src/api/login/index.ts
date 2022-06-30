import { HttpMethod } from '../index';
import { ILoginApi } from './types';

const loginApi: ILoginApi = {
  login(params) {
    return HttpMethod.post('/login', params);
  },
};
export default loginApi;
