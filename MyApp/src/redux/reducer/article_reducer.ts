import {ArticleDetailResponse} from '../../models/article';
import {createSlice} from '@reduxjs/toolkit';

interface InitState {
  isLoading: boolean;
  article: Partial<ArticleDetailResponse>;
}

const articleSlice = createSlice({
  name: 'article',
  initialState: {
    isLoading: true,
    article: {},
  } satisfies InitState as InitState,
  reducers: {
    article: (state, action) => {
      (state.isLoading = false), (state.article = action.payload);
    },
    reset: state => {
      state.isLoading = true;
      state.article = {};
    },
  },
});

export const {article, reset} = articleSlice.actions;
export default articleSlice.reducer;
