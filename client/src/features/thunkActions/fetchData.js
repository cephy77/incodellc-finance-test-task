import { createAsyncThunk } from '@reduxjs/toolkit';
import { socket } from '../../socket';
import { updateFavShares } from '../favouriteSharesList/favouriteSharesListSlice';
import { setSharesData } from '../sharesList/sharesListSlice';

export const fetchData = createAsyncThunk('data/fetchData', async (_, { dispatch }) => {

  socket.emit('start');

  socket.on('ticker', (data) => {
    dispatch(setSharesData(data));
    dispatch(updateFavShares(data));
  });

});