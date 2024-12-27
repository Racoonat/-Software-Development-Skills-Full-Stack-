import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import goalReducer from '../features/goals/goalSlice';
import bookReducer from '../features/books/bookSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    goals: goalReducer,
    books: bookReducer,
  },
});
