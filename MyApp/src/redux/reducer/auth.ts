import {createSlice} from '@reduxjs/toolkit';
import Token from '../../models/token';
import {AppString, LocalStorage} from '../../shared/shared_preferences';

interface InitState {
  isLoading: boolean;
  token: Partial<Token>;
}
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoading: false,
    token: {},
  } satisfies InitState as InitState,
  reducers: {
    login: (state, action) => {
      state.token = action.payload;
      state.isLoading = true;
      LocalStorage.set(AppString.TOKEN, state.token);
    },
    logout: state => {
      state.isLoading = false;
    },
  },
});

export const {login, logout} = authSlice.actions;
export default authSlice.reducer;
