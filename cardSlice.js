// src/features/cardSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCardData = createAsyncThunk('card/fetchCardData', async (id) => {
  const response = await axios.get(`/api/card/${id}`);
  return response.data;
});

const cardSlice = createSlice({
  name: 'card',
  initialState: {
    data: {},
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCardData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCardData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data[action.meta.arg] = action.payload;
      })
      .addCase(fetchCardData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default cardSlice.reducer;
