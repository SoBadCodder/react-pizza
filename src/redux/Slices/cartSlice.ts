import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

type CartSelector = {
  id: string;
  activeType: number;
  activeSize: number;
  sizes: number[];
  typeNames: string[];
};

export type CartItem = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  type: string;
  size: number;
  count: number;
};

interface CartSliceState {
  totalPrice: number;
  items: CartItem[];
}

const initialState: CartSliceState = {
  totalPrice: 0,
  items: [],
};

const CalcTotalPrice = (state: CartSliceState) => {
  state.totalPrice = state.items.reduce((sum, obj) => {
    return obj.price * obj.count + sum;
  }, 0);
};

const findItem = (state: CartItem[], action: { id: string; type: string; size: number }) => {
  return state.find(
    (obj) => obj.id === action.id && obj.type === action.type && obj.size === action.size,
  );
};

export const cartSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      const foundItem = findItem(state.items, action.payload);
      if (foundItem) {
        foundItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
      CalcTotalPrice(state);
    },

    minusItem(state, action: PayloadAction<{ id: string; type: string; size: number }>) {
      const foundItem = findItem(state.items, action.payload);

      if (foundItem) {
        foundItem.count--;
      }
      CalcTotalPrice(state);
    },

    removeItem: (state, action: PayloadAction<{ id: string; type: string; size: number }>) => {
      state.items = state.items.filter(
        (obj) =>
          obj.id !== action.payload.id ||
          obj.type !== action.payload.type ||
          obj.size !== action.payload.size,
      );
      CalcTotalPrice(state);
    },

    clearItems: (state) => {
      state.items = [];
      CalcTotalPrice(state);
    },
  },
});

export const cartSelector = (state: RootState) => state.cart;
export const cartItemSelector =
  ({ id, activeType, activeSize, sizes, typeNames }: CartSelector) =>
  (state: RootState) =>
    state.cart.items.find(
      (obj) =>
        obj.id === id && obj.type === typeNames[activeType] && obj.size === sizes[activeSize],
    );

export const { addItem, minusItem, removeItem, clearItems } = cartSlice.actions;

export default cartSlice.reducer;
