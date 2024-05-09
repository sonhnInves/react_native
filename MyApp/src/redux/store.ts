import {configureStore} from '@reduxjs/toolkit';
import authReducer from './reducer/auth';
import caskListReducer from './reducer/cask_reducer.ts';
import distilleriesNewsReduces from './reducer/distilleries_news_reducer.ts';
import notificationReducer from './reducer/notification_reducer.ts';
import caskDetailReducer from './reducer/cask_detail_reducer.ts';
import myProfileReducer from './reducer/my_profile_reducer.ts';
import articleReducer from './reducer/article_reducer.ts';

const store = configureStore({
  reducer: {
    authReducer,
    caskListReducer,
    distilleriesNewsReduces,
    notificationReducer,
    caskDetailReducer,
    myProfileReducer,
    articleReducer,
  },
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
