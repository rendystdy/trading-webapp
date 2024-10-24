import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '@/features/counter/counterSlice';
import announcementReducer from '@/features/News/newsSlice';
import educationReducer from '@/features/Education/educationSlice';
import registerReducer from '@/features/Register/registerSlice';
import profileReducer from '@/features/Profile/profileSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    announcement: announcementReducer,
    education: educationReducer,
    register: registerReducer,
    profile: profileReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
