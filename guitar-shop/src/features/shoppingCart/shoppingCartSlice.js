import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	value: [],
};

export const shoppingCartSlice = createSlice({
	name: 'shoppingCart',
	initialState,
	reducers: {
		addToCart: (state, action) => {
			state.value.push(action.payload);
		},
		removeFromCart: (state, action) => {
			state.value = state.value.map((guitar) => guitar).filter((guitar, index) => index !== action.payload);
		},
	},
});
export const { addToCart, removeFromCart } = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
