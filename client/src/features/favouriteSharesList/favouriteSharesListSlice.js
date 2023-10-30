import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favSharesTickers: JSON.parse(sessionStorage.getItem('favSharesTickers')) || [],
  favSharesList: [],
}

export const favouriteSharesListSlice = createSlice({
  name: 'favSharesList',
  initialState,
  reducers: {
    setFavShare: (state, action) => {
      if (state.favSharesTickers.includes(action.payload.ticker)) {
        return;
      }

      state.favSharesTickers = [...state.favSharesTickers, action.payload.ticker];
      state.favSharesList = [...state.favSharesList, action.payload];

      sessionStorage.setItem('favSharesTickers', JSON.stringify(state.favSharesTickers));
    },
    deleteFavShare: (state, action) => {
      state.favSharesTickers = state.favSharesTickers.filter(ticker => ticker !== action.payload);
      state.favSharesList = state.favSharesList.filter(share => share.ticker !== action.payload);

      sessionStorage.setItem('favSharesTickers', JSON.stringify(state.favSharesTickers));
    },
    updateFavShares: (state, action) => {
      const favShares = action.payload.filter(share => state.favSharesTickers.includes(share.ticker));
      state.favSharesList = favShares;
    }
  },
})

export const { setFavShare, deleteFavShare, updateFavShares } = favouriteSharesListSlice.actions

export default favouriteSharesListSlice.reducer