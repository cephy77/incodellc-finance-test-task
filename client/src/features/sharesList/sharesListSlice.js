import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  shares: [],
}

export const sharesListSlice = createSlice({
  name: 'sharesList',
  initialState,
  reducers: {
    setSharesData: (state, action) => {
      state.shares = action.payload;
    },
  },
})

export const { setSharesData } = sharesListSlice.actions

export default sharesListSlice.reducer