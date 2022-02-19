import { createSlice } from '@reduxjs/toolkit';

export const accountSlice = createSlice({
  name: 'account',
  initialState: {
    showBalance: false,
    swap: false,
  },
  reducers: {
    clearState: (state) => {
      return state;
    },
    toggleShowBalance: (state) => {
      state.showBalance = !state.showBalance;
      return state;
    },
    toggleSwap: (state) => {
      state.swap = !state.swap;
      return state;
    },
  },
  extraReducers: {},
});

export const { clearState, toggleShowBalance, toggleSwap } =
  accountSlice.actions;

export const accountSelector = (state) => state.account;
