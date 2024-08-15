import { configureStore } from '@reduxjs/toolkit';
import messageReducer from './messageSlice'; // Import your reducer

// Create the store using configureStore
const store = configureStore({
  reducer: {
    message: messageReducer, // Add the reducer to the store
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;