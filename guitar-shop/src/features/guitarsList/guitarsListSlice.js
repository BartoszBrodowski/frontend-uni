import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import axios, * as others from 'axios';

const initialState = {
	loading: false,
	error: '',
	searchValue: '',
	value: [
		{
			id: uuidv4().toString(),
			name: 'Gibson Les Paul',
			type: 'Les Paul',
			color: 'Orange',
			description: 'Classic Gibson model',
			price: 400,
			image: 'gibson-les-paul.jpg',
			category: 'Electric',
			releaseDate: new Date('January 1, 1952'),
			stringsId: 'd0f5b0e1-5c5f-4b0f-8f9f-5f9f2f2f2f2f',
		},
		{
			id: uuidv4().toString(),
			name: 'Fender Stratocaster',
			type: 'Stratocaster',
			color: 'White',
			description: 'Classic Fender model',
			price: 300,
			image: 'fender-stratocaster.jpg',
			category: 'Electric',
			releaseDate: new Date('September 22, 1954'),
			stringsId: '874ea296-3b6a-47e6-ac66-4b4395b552a8',
		},
		{
			id: uuidv4().toString(),
			name: 'Epiphone Les Paul',
			type: 'Les Paul',
			color: 'Sunburst',
			description: 'Affordable Epiphone Les Paul model',
			price: 400,
			image: 'epiphone-les-paul-sunburst.jpg',
			category: 'Electric',
			releaseDate: new Date('December 21, 1952'),
			stringsId: 'beff0d03-209c-47a4-b2c6-d6b10bc69aae',
		},
		{
			id: uuidv4().toString(),
			name: 'Fender Squier Telecaster',
			type: 'Telecaster',
			color: 'Black',
			description: 'Affordable Fender model',
			price: 200,
			image: 'fender-squier-bullet-telecaster-lrl-blk.jpg',
			category: 'Electric',
			releaseDate: new Date('May 15, 2010'),
			stringsId: '2cc14971-d42a-440e-b056-0239878d9d06',
		},
		{
			id: uuidv4().toString(),
			name: 'Yamaha F310',
			type: 'Acoustic',
			color: 'Beige',
			description: 'Affordable Yamaha model',
			price: 150,
			image: 'yamahaF310.jpg',
			category: 'Acoustic',
			releaseDate: new Date('June 30, 2010'),
			stringsId: '907c6f0d-94c5-418d-b819-ebd3b3ae788a',
		},
	].sort((a, b) => a.name.localeCompare(b.name)),
};

export const fetchGuitars = createAsyncThunk('guitars/fetchGuitars', async () => {
	return axios.get('http://localhost:8000/guitars').then((res) => res.data);
});

export const guitarsListSlice = createSlice({
	name: 'guitars',
	initialState,
	reducers: {
		addToList: (state, action) => {
			state.value.push(action.payload);
		},
		editGuitar: (state, action) => {
			const index = state.value.findIndex((guitar) => guitar.id === action.payload.id);
			state.value[index] = action.payload;
		},
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
		filterByType: (state, action) => {
			state.value = initialState.value;
			if (action.payload === 'All') {
				state.value = initialState.value;
				return;
			} else {
				state.value = state.value.filter((guitar) => guitar.type === action.payload);
			}
		},
		filterByCategory: (state, action) => {
			state.value = initialState.value;
			if (action.payload === false) {
				state.value = initialState.value;
				return;
			} else {
				state.value = state.value.filter((guitar) => guitar.category === 'Acoustic');
			}
		},
		changeSearchValue: (state, action) => {
			state.searchValue = action.payload;
		},
		sortByDate: (state, action) => {
			if (action.payload === false) {
				state.value.sort((a, b) => b.releaseDate - a.releaseDate);
			}
			if (action.payload === true) {
				state.value = initialState.value;
			}
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchGuitars.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(fetchGuitars.fulfilled, (state, action) => {
			state.loading = false;
			state.value = action.payload;
			state.error = '';
		});
		builder.addCase(fetchGuitars.rejected, (state, action) => {
			state.loading = false;
			state.error = action.error.message;
		});
	},
});

export const {
	sortAtoZ,
	sortZtoA,
	sortPriceLowToHigh,
	sortPriceHighToLow,
	filterByType,
	addToList,
	editGuitar,
	filterByCategory,
	changeSearchValue,
	sortByDate,
} = guitarsListSlice.actions;

export default guitarsListSlice.reducer;

export const regexSearch = (state, regex) => {
	return state.guitarsList.value.filter((guitar) => {
		return guitar.name.toLowerCase().match(regex.toLowerCase());
	});
};
