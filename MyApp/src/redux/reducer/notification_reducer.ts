import {createSlice} from '@reduxjs/toolkit';
interface NotificationState {
  isLoading: boolean;
  notification: Partial<Notification>;
}
const notificationSlice = createSlice({
  name: 'notification',
  initialState: {
    isLoading: true,
    notification: {},
  } satisfies NotificationState as NotificationState,
  reducers: {
    notification: (state, action) => {
      state.isLoading = false;
      state.notification = action.payload;
    },
  },
});
export const {notification} = notificationSlice.actions;
export default notificationSlice.reducer;
