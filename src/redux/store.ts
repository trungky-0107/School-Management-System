import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import studentReducer from './slices/studentSlice'; 

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    student: studentReducer, 

  },
});

// Infer the `RootState` and `AppDispatch` types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
