import {Dispatch} from 'react';
import Token from '../../models/token';
import axios from 'axios';

export interface LoginAction {
  readonly type: 'ON_LOGIN';
  payload: Token;
}
export interface ErrorAction {
  readonly type: 'ON_ERROR';
  payload: any;
}
export interface SHOWLOADING {
  readonly type: 'SHOW_LOADING';
  payload: any;
}

export interface HIDELOADING {
  readonly type: 'HIDE_LOADING';
  payload: any;
}

export type UserAction = LoginAction | ErrorAction | SHOWLOADING | HIDELOADING;

export const handleLogin = (email: string) => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      const API_URL = 'http://ec2-54-196-173-168.compute-1.amazonaws.com';
      const res = await axios.post(API_URL + ':3000/api/getToken', email);
      if (res.data) {
        dispatch({
          type: 'ON_LOGIN',
          payload: res.data,
        });
        dispatch({
          type: 'SHOW_LOADING',
          payload: true,
        });
        dispatch({
          type: 'HIDE_LOADING',
          payload: false,
        });
      } else {
        dispatch({
          type: 'ON_ERROR',
          payload: 'Login issue with API',
        });
      }
    } catch (e) {
      console.log(e);
    }
  };
};
