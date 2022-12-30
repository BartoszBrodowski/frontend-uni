import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
	value: [
		{
			id: uuidv4().toString(),
			name: 'Gibson Les Paul',
			type: 'Les Paul',
			color: 'Orange',
			description: 'Classic Gibson model',
			price: 400,
			image: 'gibson-les-paul.jpg',
		},
		{
			id: uuidv4().toString(),
			name: 'Fender Stratocaster',
			type: 'Stratocaster',
			color: 'White',
			description: 'Classic Fender model',
			price: 300,
			image: 'fender-stratocaster.jpg',
		},
		{
			id: uuidv4().toString(),
			name: 'Fender Squier Telecaster',
			type: 'Telecaster',
			color: 'Black',
			description: 'Affordable Fender model',
			price: 200,
			image: 'fender-squier-bullet-telecaster-lrl-blk.jpg',
		},
	].sort((a, b) => a.name.localeCompare(b.name)),
};

export const guitarsListSlice = createSlice({
	name: 'guitars',
	initialState,
	reducers: {
		sortAtoZ: (state) => {
			state.value.sort((a, b) => a.name.localeCompare(b.name));
		},
		sortZtoA: (state) => {
			state.value.sort((a, b) => b.name.localeCompare(a.name));
		},
		sortPriceLowToHigh: (state) => {
			state.value.sort((a, b) => a.price - b.price);
		},
		sortPriceHighToLow: (state) => {
			state.value.sort((a, b) => b.price - a.price);
		},
	},
});

export const { sortAtoZ, sortZtoA, sortPriceLowToHigh, sortPriceHighToLow } =
	guitarsListSlice.actions;

export default guitarsListSlice.reducer;
