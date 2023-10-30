import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import sharesListSlice from '../features/sharesList/sharesListSlice';
import favouriteSharesListSlice from '../features/favouriteSharesList/favouriteSharesListSlice';

export const store = configureStore({
  reducer: {
    sharesList: sharesListSlice,
    favouriteSharesList: favouriteSharesListSlice,
  },
}, applyMiddleware(thunk))