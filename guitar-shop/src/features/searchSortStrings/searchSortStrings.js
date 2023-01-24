import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	value: 'A-Z',
	onlyAcoustic: false,
};

export const searchSortStringsSlice = createSlice({
	name: 'sortSearchStrings',
	initialState,
	reducers: {
		changeSort: (state, action) => {
			state.value = action.payload;
		},
		changeType: (state, action) => {
			state.type = action.type;
		},
	},
});
export const { changeSort, changeType } = searchSortStringsSlice.actions;

export default searchSortStringsSlice.reducer;
