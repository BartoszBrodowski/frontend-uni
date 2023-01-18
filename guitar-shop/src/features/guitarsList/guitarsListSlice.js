import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import axios, * as others from 'axios';
const reduxLogger = require('redux-logger');

const logger = reduxLogger.createLogger();

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
			releaseDate: '1952',
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
			releaseDate: '1954',
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
			releaseDate: '2010',
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
			releaseDate: '2010',
		},
		{
			id: uuidv4().toString(),
			name: 'aaaGibson Les Paul',
			type: 'Les Paul',
			color: 'Orange',
			description: 'Classic Gibson model',
			price: 400,
			image: 'gibson-les-paul.jpg',
			category: 'Electric',
			releaseDate: '1952',
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
			state.value = state.value.push(action.payload);
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
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
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
	filterByCategory,
	changeSearchValue,
} = guitarsListSlice.actions;

export default guitarsListSlice.reducer;

export const regexSearch = (state, regex) => {
	return state.guitarsList.value.filter((guitar) => {
		return guitar.name.toLowerCase().match(regex.toLowerCase());
	});
};
