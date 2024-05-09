import axios, {AxiosError} from 'axios';
import {AppString, LocalStorage} from '../shared/shared_preferences';

const callApi = axios.create({
  baseURL: 'http://ec2-54-196-173-168.compute-1.amazonaws.com:3000/',
});
callApi.defaults.baseURL =
  'http://ec2-54-196-173-168.compute-1.amazonaws.com:3000/';

callApi.interceptors.request.use(async config => {
  const userToken = await LocalStorage.get(AppString.TOKEN);
  if (userToken !== null && userToken['token']) {
    config.headers.Authorization = `Bearer ${userToken['token']}`;
  }
  config.headers['Content-Type'] =
    'application/x-www-form-urlencoded; charset=UTF-8';
  return config;
});

callApi.interceptors.response.use(
  res => {
    return res;
  },
  function (error) {
    if (error as AxiosError) {
      switch (error.status) {
        case 400:
          console.error(error.message);
          break;

        case 401:
          console.error('unauthorised');
          break;

        case 404:
          console.error('/not-found');
          break;

        case 500:
          console.error('/server-error');
          break;
      }
    }
    return Promise.reject(error);
  },
);

export default callApi;
