import axios, {AxiosError} from 'axios';
import {AppString, LocalStorage} from '../shared/shared_preferences';
import {caskList} from '../redux/reducer/cask_reducer.ts';
import {distilleriesNews} from '../redux/reducer/distilleries_news_reducer.ts';
import {notification} from '../redux/reducer/notification_reducer.ts';
import callApi from './interceptors.ts';
import {caskDetail} from '../redux/reducer/cask_detail_reducer.ts';
import {myProfile} from '../redux/reducer/my_profile_reducer.ts';

const API_URL = 'http://ec2-54-196-173-168.compute-1.amazonaws.com:3000/';

const getCask = async (dispatch: any) => {
  const userToken = await LocalStorage.get(AppString.TOKEN);
  const token = userToken['token'] as string;
  const orgId = userToken['orgid'] as number;
  callApi
    .get('api/caskx/loadAccount', {
      params: {
        token: token,
        orgid: orgId,
      },
    })
    .then(res => {
      dispatch(caskList(res.data));
    });
};
const getListArticle = async (dispatch: any) => {
  const userToken = await LocalStorage.get(AppString.TOKEN);
  const token = userToken['token'] as string;
  callApi
    .get('api/distillery-news', {
      params: {
        token: token,
      },
    })
    .then(res => {
      dispatch(distilleriesNews(res.data));
    });
};
const getNotificaton = async (dispatch: any) => {
  const userToken = await LocalStorage.get(AppString.TOKEN);
  const token = userToken['token'] as string;
  callApi
    .get('api/v1/vip/invitations', {
      params: {
        token: token,
      },
    })
    .then(res => {
      dispatch(notification(res.data));
    });
};
const getCaskDetail = async (dispatch: any, id: number) => {
  const userToken = await LocalStorage.get(AppString.TOKEN);
  const token = userToken['token'] as string;
  const orgId = userToken['orgid'] as number;
  callApi
    .get('api/caskx/investmentLookup', {
      params: {
        token: token,
        orgid: orgId,
        id: id,
      },
    })
    .then(res => {
      console.log('###-------###', res.data);
      dispatch(caskDetail(res.data));
    });
};
const getMyProfile = async (dispatch: any) => {
  const userToken = await LocalStorage.get(AppString.TOKEN);
  const token = userToken['token'] as string;
  const orgId = userToken['orgid'] as number;
  const t = `token=${token}&orgId=${orgId}`;
  callApi.post('api/checkToken', t).then(res => {
    dispatch(myProfile(res.data));
  });
};
export const Api = {
  getCask,
  getListArticle,
  getNotificaton,
  getCaskDetail,
  getMyProfile,
};
