import { createAsyncThunk } from '@reduxjs/toolkit';
import API from '../../api/api';

export const getShops = createAsyncThunk(
  'getShops',
  async (_, { rejectWithValue }) => {
    try {
      const data = await API.getAllShops();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const postOrder = createAsyncThunk(
  'postOrder',
  async (formData, { rejectWithValue }) => {
    try {
      const data = await API.sendOrder(formData);
      console.log('data: ', data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
