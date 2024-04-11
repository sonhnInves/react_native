import CaskX from '../../models/cask.ts';
import {createSlice} from '@reduxjs/toolkit';
interface initial {
  isLoading: boolean;
  caskList: Partial<CaskX>;
}

const caskListSlice = createSlice({
  name: 'cask',
  initialState: {
    isLoading: true,
    caskList: {},
  } satisfies initial as initial,
  reducers: {
    caskList: (state, action) => {
      state.isLoading = false;
      state.caskList = action.payload;
    },
  },
});
export const {caskList} = caskListSlice.actions;
export default caskListSlice.reducer;
