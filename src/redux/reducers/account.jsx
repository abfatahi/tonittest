import { createSlice } from '@reduxjs/toolkit';

export const accountSlice = createSlice({
  name: 'account',
  initialState: {
    showBalance: false,
  },
  reducers: {
    clearState: (state) => {
      return state;
    },
    toggleShowBalance: (state) => {
      state.showBalance = !state.showBalance;
      return state;
    },
  },
  extraReducers: {
    
  },
});

export const { clearState, toggleShowBalance } =
  accountSlice.actions;

export const accountSelector = (state) => state.account;
