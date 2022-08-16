import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalPrice: 0,
  items: [],
};

const CalcTotalPrice = (state) => {
  state.totalPrice = state.items.reduce((sum, obj) => {
    return obj.price * obj.count + sum;
  }, 0);
};

const findItem = (state, action) => {
  return state.find(
    (obj) => obj.id === action.id && obj.type === action.type && obj.size === action.size,
  );
};

export const cartSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    addItem: (state, action) => {
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
    minusItem(state, action) {
      const foundItem = findItem(state.items, action.payload);

      if (foundItem) {
        foundItem.count--;
      }

      CalcTotalPrice(state);
    },

    removeItem: (state, action) => {
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

export const cartSelector = (state) => state.cart;
export const cartItemSelector =
  ({ id, activeType, activeSize, sizes, typeNames }) =>
  (state) =>
    state.cart.items.find(
      (obj) =>
        obj.id === id && obj.type === typeNames[activeType] && obj.size === sizes[activeSize],
    );

export const { addItem, minusItem, removeItem, clearItems } = cartSlice.actions;

export default cartSlice.reducer;
