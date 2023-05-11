import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

interface AddProduct {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export interface CartState {
  products: AddProduct[];
  quantity: number;
  total: number;
}

interface AddProductAction {
  type: string;
  payload: AddProduct;
}

interface ResetAction {
  type: string;
}

type CartAction = AddProductAction | ResetAction;

const initialState = {
  products: [],
  quantity: 0,
  total: 0,
} as CartState;

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state: CartState, action: AddProductAction) => {
      state.products.push(action.payload);
      state.quantity += 1;
      state.total += action.payload.price * action.payload.quantity;
    },
    reset: (state: CartState) => {
      state = initialState;
    },
  },
});

export const { addProduct, reset } = cartSlice.actions;

export const selectQuantity = (state: RootState) => state.cart.quantity;

export default cartSlice.reducer;
