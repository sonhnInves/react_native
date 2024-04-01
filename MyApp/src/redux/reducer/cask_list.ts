import Cask from '../../models/cask_list';
import {createSlice} from '@reduxjs/toolkit';
interface initial {
  isLoading: boolean;
  caskList: Partial<Cask>;
}

const caskListSlice = createSlice({
  name: 'cask_list',
  initialState: {
    isLoading: false,
    caskList: {},
  } satisfies initial as initial,
  reducers: {
    caskList: (state, action) => {
      state.isLoading = true;
      state.caskList = action.payload;
    },
  },
});
export const {caskList} = caskListSlice.actions;
export default caskListSlice.reducer;
