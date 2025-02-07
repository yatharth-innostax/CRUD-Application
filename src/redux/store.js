import { configureStore } from '@reduxjs/toolkit';
import itemsReducer from './itemsSlice';  // Import the items slice

export const store = configureStore({
  reducer: {
    items: itemsReducer, 
  },
});
