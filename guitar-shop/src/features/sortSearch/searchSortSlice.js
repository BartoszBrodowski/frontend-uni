import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	value: 'A-Z',
	type: 'All',
};

export const searchSortSlice = createSlice({
	name: 'sortSearch',
	initialState,
	reducers: {
		changeSort: (state, action) => {
			state.value = action.payload;
		},
		changeType: (state, action) => {
			state.type = action.payload;
		},
	},
});
export const { changeSort, changeType } = searchSortSlice.actions;

export default searchSortSlice.reducer;
