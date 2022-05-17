import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

interface CartItemProps {
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
  reducers: {},
});

// console.log(cartSlice);

export default cartSlice.reducer;
