import axios from 'axios';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {AppString, LocalStorage} from '../shared/shared_preferences';
import {caskList} from '../redux/reducer/cask_list';

export const fetchUserById = createAsyncThunk(
  'users/fetchByIdStatus',
  async (userId: number, thunkAPI) => {
    const userToken = await LocalStorage.get(AppString.TOKEN);
    const token = userToken['token'] as string;
    const orgId = userToken['orgid'] as number;
    const API_URL = 'http://ec2-54-196-173-168.compute-1.amazonaws.com';
    const res = await axios.get(API_URL + ':3000/api/caskx/loadAccount', {
      params: {
        token: token,
        orgid: orgId,
      },
    });
    return res.data;
  },
);

export const getCaskList = async (dispatch: any) => {
  try {
    const userToken = await LocalStorage.get(AppString.TOKEN);
    const token = userToken['token'] as string;
    const orgId = userToken['orgid'] as number;
    const API_URL = 'http://ec2-54-196-173-168.compute-1.amazonaws.com';
    const res = await axios.get(API_URL + ':3000/api/caskx/loadAccount', {
      params: {
        token: token,
        orgid: orgId,
      },
    });
    dispatch(caskList(res.data));
  } catch (e) {
    console.log('Error', e);
  }
};
export const Api = {
  getCaskList,
};
