import { createSlice } from '@reduxjs/toolkit';
// import type { PayloadAction } from '@reduxjs/toolkit';

// export interface shopsState {
//   value: number;
// }

const initialState = {
  shopsList: [],
  orders: [],
};

export const shopsSlice = createSlice({
  name: 'shops',
  initialState,
  reducers: {
    addToOrders: (state, { payload }) => {
      const order = { ...payload, count: 1 };
      console.log('order: ', order);
      state.orders.push(order);
    },
    removeFromOrders: (state, { payload }) => {
      state.orders = state.orders.filter(order => {
        return order.id !== payload;
      });
    },
    changeOrderCount: (state, { payload }) => {
      console.log('payload: ', payload);
      const orderIndex = state.orders.findIndex(item => item.id === payload.id);
      state.orders[orderIndex].count = Number(payload.count);
    },
  },
});

export const { addToOrders, removeFromOrders, changeOrderCount } =
  shopsSlice.actions;

export default shopsSlice.reducer;
