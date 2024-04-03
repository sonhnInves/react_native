import {configureStore} from '@reduxjs/toolkit';
import authReducer from './reducer/auth';
import caskListReducer from './reducer/cask_reducer.ts';
import distilleriesNewsReduces from './reducer/distilleries_news_reducer.ts';
import notificationReducer from './reducer/notification_reducer.ts';

const store = configureStore({
  reducer: {
    authReducer,
    caskListReducer,
    distilleriesNewsReduces,
    notificationReducer,
  },
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
