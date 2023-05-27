import { createSlice } from '@reduxjs/toolkit';
import { getShops, postOrder } from './shopsOperation';

const initialState = {
  shopsList: [],
  orders: [],
  currentShop: null,
  isLoading: false,
  error: null,
};

export const shopsSlice = createSlice({
  name: 'shops',
  initialState,
  reducers: {
    setCurrentShop: (state, { payload }) => {
      state.currentShop = payload;
    },
    addToOrders: (state, { payload }) => {
      const order = { ...payload, count: 1 };
      state.orders.push(order);
    },
    removeFromOrders: (state, { payload }) => {
      state.orders = state.orders.filter(order => {
        return order.id !== payload;
      });
    },
    clearOrders: state => {
      state.orders = [];
    },
    changeOrderCount: (state, { payload }) => {
      const orderIndex = state.orders.findIndex(item => item.id === payload.id);
      state.orders[orderIndex].count = Number(payload.count);
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getShops.pending, state => {
        state.isLoading = true;
      })
      .addCase(getShops.fulfilled, (state, { payload }) => {
        console.log('payload: ', payload);
        payload.forEach(element => {
          element.dishes.map(item => (item.own = element._id));
        });
        state.shopsList = payload;
        state.isLoading = false;
        state.error = false;
      })
      .addCase(getShops.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })
      .addCase(postOrder.pending, state => {
        state.isLoading = true;
      })
      .addCase(postOrder.fulfilled, (state, { payload }) => {
        console.log('payload: ', payload);

        state.isLoading = false;
        state.error = false;
      })
      .addCase(postOrder.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      });
  },
});

export const {
  addToOrders,
  removeFromOrders,
  changeOrderCount,
  setCurrentShop,
  clearOrders,
} = shopsSlice.actions;

export default shopsSlice.reducer;
