import { configureStore } from '@reduxjs/toolkit';
import filter from './Slices/filterSlice';
import cart from './Slices/cartSlice';
import pizza from './Slices/PizzaSlice';

export const store = configureStore({
  reducer: {
    filter,
    cart,
    pizza,
  },
});
