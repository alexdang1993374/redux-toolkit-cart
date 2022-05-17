import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

export interface CartItemProps {
  id: string;
  title: string;
  price: string;
  img: string;
  amount: number;
}
interface InitialStateProps {
  cartItems: CartItemProps[];
  amount: number;
  total: number;
  isLoading: boolean;
}

const initialState: InitialStateProps = {
  cartItems: cartItems,
  amount: 3,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

// console.log(cartSlice);
export const { clearCart } = cartSlice.actions;

export default cartSlice.reducer;
