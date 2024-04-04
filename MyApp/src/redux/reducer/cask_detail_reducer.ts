import {createSlice} from '@reduxjs/toolkit';
import {CaskDetail} from '../../models/cask_detail';

interface InitalState {
  isLoading: boolean;
  caskDetail: Partial<CaskDetail>;
}
const caskDetailSlice = createSlice({
  name: 'cask',
  initialState: {
    isLoading: true,
    caskDetail: {},
  } satisfies InitalState as InitalState,
  reducers: {
    caskDetail: (state, action) => {
      state.isLoading = false;
      state.caskDetail = action.payload;
    },
  },
});
export const {caskDetail} = caskDetailSlice.actions;
export default caskDetailSlice.reducer;
