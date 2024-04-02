import {configureStore} from '@reduxjs/toolkit';
import authReducer from './reducer/auth';
import caskListReducer from './reducer/cask_list';

const store = configureStore({
  reducer: {
    authReducer,
    caskListReducer,
  },
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
