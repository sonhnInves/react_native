import axios, {AxiosError} from 'axios';
import {AppString, LocalStorage} from '../shared/shared_preferences';

const callApi = axios.create({
  baseURL: 'http://ec2-54-196-173-168.compute-1.amazonaws.com:3000/',
});
callApi.defaults.baseURL =
  'http://ec2-54-196-173-168.compute-1.amazonaws.com:3000/';

callApi.interceptors.request.use(async config => {
  const userToken = await LocalStorage.get(AppString.TOKEN);
  if (userToken['token']) {
    config.headers.Authorization = `Bearer ${userToken['token']}`;
  }
  return config;
});

callApi.interceptors.response.use(
  res => res,
  (error: AxiosError) => {
    const {data, status, config} = error.response!;
    switch (status) {
      case 400:
        console.error(data);
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
    return Promise.reject(error);
  },
);

export default callApi;
