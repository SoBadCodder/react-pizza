import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPizzas = createAsyncThunk('pizza/fetchPizzasStatus', async (params) => {
  const { currentPage, category, sortBy, order, search } = params;
  const { data } = await axios.get(
    `https://62e3b128b54fc209b88e8d09.mockapi.io/items?page=${currentPage}&limit=4&${category}sortBy=${sortBy}&order=${order}${search}`,
  );

  return data;
});

const initialState = {
  items: [],
  status: 'loading', // loading | success | error
};

export const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: {
    [fetchPizzas.pending]: (state) => {
      state.items = [];
      state.status = 'loading';
    },
    [fetchPizzas.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = 'success';
    },
    [fetchPizzas.rejected]: (state) => {
      state.items = [];
      state.status = 'error';
    },
  },
});

export const pizzaDataSelector = (state) => state.pizza;

export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;
