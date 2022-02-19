import { createAsyncThunk } from '@reduxjs/toolkit';
import { messariURL } from '../../utils/api';

export const getCryptoList = createAsyncThunk(
  'get/cryptos',
  async (thunkAPI) => {
    try {
      const response = await fetch(messariURL, {
        mode: 'cors',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${sessionStorage.getItem('token')}`,
        },
      });

      let data = await response.json();
      if (data.data) {
        return data.data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (error) {
      return thunkAPI.rejectWithValue([
        {
          message: 'Failed! To establish connection.',
        },
      ]);
    }
  }
);
