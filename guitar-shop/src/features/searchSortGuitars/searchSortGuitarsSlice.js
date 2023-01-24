import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	value: 'A-Z',
	onlyAcoustic: false,
};

export const searchSortGuitarsSlice = createSlice({
	name: 'sortSearchGuitars',
	initialState,
	reducers: {
		changeSort: (state, action) => {
			state.value = action.payload;
		},
		changeCategory: (state, action) => {
			state.category = action.payload;
		},
	},
});
export const { changeSort, changeCategory } = searchSortGuitarsSlice.actions;

export default searchSortGuitarsSlice.reducer;
