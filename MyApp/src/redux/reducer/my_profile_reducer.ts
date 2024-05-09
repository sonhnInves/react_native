import {createSlice} from '@reduxjs/toolkit';
import {MyProfile} from '../../models/my_profile';

interface MyProfileState {
  isLoading: boolean;
  myProfile: Partial<MyProfile>;
}

const myProfileSlice = createSlice({
  name: 'my_profile',
  initialState: {
    isLoading: true,
    myProfile: {},
  } satisfies MyProfileState as MyProfileState,
  reducers: {
    myProfile: (state, action) => {
      (state.isLoading = false), (state.myProfile = action.payload);
    },
  },
});
export const {myProfile} = myProfileSlice.actions;
export default myProfileSlice.reducer;
