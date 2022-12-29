import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	value: 'A-Z',
};

export const searchSortSlice = createSlice({
	name: 'sortSearch',
	initialState,
	reducers: {
		changeSort: (state, action) => {
			state.value = action.payload;
		},
	},
});
export const { changeSort } = searchSortSlice.actions;

export default searchSortSlice.reducer;
