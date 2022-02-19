import { createSlice } from '@reduxjs/toolkit';
import { getCryptoList } from '../actions/dashboard';

export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: {
    loading: false,
    error: false,
    success: false,
    cryptoList: [],
  },
  reducers: {
    clearState: (state) => {
      state.loading = false;
      state.error = false;
      state.success = false;
      state.cryptoList = [];
      return state;
    },
  },
  extraReducers: {
    [getCryptoList.pending]: (state) => {
      state.loading = true;
      return state;
    },
    [getCryptoList.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.error = false;
      state.success = true;
      state.cryptoList = payload;
      return state;
    },
    [getCryptoList.rejected]: (state) => {
      state.loading = false;
      state.error = true;
      state.success = false;
      state.cryptoList = [];
      return state;
    },
  },
});

export const { clearState } = dashboardSlice.actions;

export const dashboardSelector = (state) => state.dashboard;
