import {createSlice} from '@reduxjs/toolkit';
import Token from '../../models/token';
import {AppString, LocalStorage} from '../../shared/shared_preferences';
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
      LocalStorage.set(AppString.TOKEN, state.user);
      console.log('User', state.user);
    },
  },
});

export const {login} = authSlice.actions;
export default authSlice.reducer;
