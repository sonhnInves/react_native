import {createSlice} from '@reduxjs/toolkit';
import Token from '../../models/token';
interface Type {
  isAuthenticated: boolean;
  isLoading: boolean;
  user: Token;
}
const initialState: Type = {
  isAuthenticated: false,
  isLoading: false,
  user: {
    success: false,
    token: '',
    refreshtoken: '',
    orgid: 0,
    networkid: 0,
  },
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      state.isLoading = true;
    },
  },
});

export const {login} = authSlice.actions;
export const selectAuth = (state: {auth: any}) => state.auth;
export default authSlice.reducer;
