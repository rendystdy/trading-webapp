import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import counterReducer from '@/features/counter/counterSlice';
import announcementReducer from '@/features/News/newsSlice';
import educationReducer from '@/features/Education/educationSlice';
import registerReducer from '@/features/Register/registerSlice';
import profileReducer from '@/features/Profile/profileSlice';


const persistConfig = {
  key: "root",
  storage,
  whitelist: ['announcement', 'profile', 'education']
};

const rootReducer = combineReducers({
  counter: counterReducer,
  announcement: announcementReducer,
  education: educationReducer,
  register: registerReducer,
  profile: profileReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
