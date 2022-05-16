import { createSlice } from "@reduxjs/toolkit";

interface InitialStateProps {
  cartItems: string[];
  amount: number;
  total: number;
  isLoading: boolean;
}

const initialState: InitialStateProps = {
  cartItems: [],
  amount: 0,
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
