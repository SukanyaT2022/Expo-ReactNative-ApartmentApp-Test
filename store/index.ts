import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice';

export const store = configureStore({
  reducer: {
    //this product we use after state on selector to bring id from store to the screen
    product: productReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;