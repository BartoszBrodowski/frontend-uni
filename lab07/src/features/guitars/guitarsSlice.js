import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
	value: [
		{
			id: uuidv4(),
			name: 'Fender Stratocaster',
			type: 'Stratocaster',
			color: 'White',
			note: '',
		},
	],
};

export const counterSlice = createSlice({
	name: 'guitars',
	initialState,
	reducers: {
		addGuitar: (state, action) => {
			state.value.push(action.payload);
		},
		deleteGuitar: (state, action) => {
			state.value = state.value.filter((guitar) => guitar.id != action.payload);
		},
		addNote: (state, action) => {
			state.value = action.payload;
		},
	},
});

export const { addGuitar, deleteGuitar, addNote } = counterSlice.actions;

export default counterSlice.reducer;
