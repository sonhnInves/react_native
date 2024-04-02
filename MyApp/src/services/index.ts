import axios from 'axios';
import {AppString, LocalStorage} from '../shared/shared_preferences';
import {caskList} from '../redux/reducer/cask_reducer.ts';
import {distilleriesNews} from "../redux/reducer/distilleries_news_reducer.ts";

const API_URL = 'http://ec2-54-196-173-168.compute-1.amazonaws.com:3000/';

const getCask = async (dispatch: any) => {
    try {
        const userToken = await LocalStorage.get(AppString.TOKEN);
        const token = userToken['token'] as string;
        const orgId = userToken['orgid'] as number;
        const res = await axios.get(API_URL + 'api/caskx/loadAccount', {
            params: {
                token: token,
                orgid: orgId,
            },
        });
        console.log(res.data)
        dispatch(caskList(res.data));
    } catch (e) {
        console.log('Error', e);
    }
};
const getListArticle = async (dispatch: any) => {
    try {
        const userToken = await LocalStorage.get(AppString.TOKEN);
        const token = userToken['token'] as string;
        const res = await axios.get(API_URL + 'api/distillery-news', {
            params: {
                token: token
            }
        })
        dispatch(distilleriesNews(res.data))
    } catch (e) {
        console.log('Error', e)
    }
}
export const Api = {
    getCask,
    getListArticle
};
