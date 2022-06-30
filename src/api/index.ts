import { Http } from '@m-xushu/axios';
import { App } from 'vue';
import loginApi from './login';
import userApi from './user';

const HttpMethod = new Http().getRequestMethod;
export { HttpMethod };

const $api = {
  ...loginApi,
  ...userApi,
};
export { $api };

export default {
  install: (app: App) => {
    app.config.globalProperties.$api = $api;
  },
};
