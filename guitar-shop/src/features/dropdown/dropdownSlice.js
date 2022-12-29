import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	value: false,
};

export const dropdownSlice = createSlice({
	name: 'dropdown',
	initialState,
	reducers: {
		showDropdown: (state) => {
			if (state.value === false) {
				state.value = true;
			} else {
				state.value = false;
			}
		},
	},
});
export const { showDropdown } = dropdownSlice.actions;

export default dropdownSlice.reducer;
