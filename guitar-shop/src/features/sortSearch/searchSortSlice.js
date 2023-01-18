import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	value: 'A-Z',
	onlyAcoustic: false,
	sortDate: 'ASC',
};

export const searchSortSlice = createSlice({
	name: 'sortSearch',
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
export const { changeSort, changeCategory } = searchSortSlice.actions;

export default searchSortSlice.reducer;
