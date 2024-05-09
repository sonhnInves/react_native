import axios, {AxiosError} from 'axios';
import {AppString, LocalStorage} from '../shared/shared_preferences';
import {caskList} from '../redux/reducer/cask_reducer.ts';
import {distilleriesNews} from '../redux/reducer/distilleries_news_reducer.ts';
import {notification} from '../redux/reducer/notification_reducer.ts';
import callApi from './interceptors.ts';
import {caskDetail} from '../redux/reducer/cask_detail_reducer.ts';
import {myProfile} from '../redux/reducer/my_profile_reducer.ts';
import {article, reset} from '../redux/reducer/article_reducer.ts';
import {login, logout} from '../redux/reducer/auth.ts';
import {SCREENS} from '../shared/constants/index.ts';

const loginEmail = (email: string, dispatch: any) => {
  callApi
    .post('api/getToken', email)
    .then(res => {
      dispatch(login(res.data));
      console.log('--------login success---------', res.data);
    })
    .catch(e => {
      console.log('-------', e);
    });
};
const resetLogin = (dispatch: any) => {
  dispatch(logout());
};

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
const getArticle = async (dispatch: any, id: number) => {
  const userToken = await LocalStorage.get(AppString.TOKEN);
  const token = userToken['token'] as string;
  callApi
    .get(`api/distillery-news/${id}`, {
      params: {
        token: token,
      },
    })
    .then(res => {
      console.log('--------------/------------', res.data);
      dispatch(article(res.data));
    });
};
const resetAction = (dispatch: any) => {
  dispatch(reset());
};
export const Api = {
  getCask,
  getListArticle,
  getNotificaton,
  getCaskDetail,
  getMyProfile,
  getArticle,
  resetAction,
  loginEmail,
  resetLogin,
};
