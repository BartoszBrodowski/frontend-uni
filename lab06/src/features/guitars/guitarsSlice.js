import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const guitarsSlice = createSlice({
	name: 'guitars',
	initialState: {
		value: [
			{
				id: uuidv4(),
				name: 'Fender Stratocaster',
				price: 1000,
				color: 'White',
				note: 'Classic Fender model',
			},
			{
				id: uuidv4(),
				name: 'Gibson Les Paul',
				price: 2000,
				color: 'Orange',
				note: 'Vintage classic Gibson model',
			},
		],
	},
	reducers: {
		addGuitar: (state, action) => {
			state.value.push(action.payload);
		},
		deleteGuitar: (state, action) => {
			state.value = state.value.filter((guitar) => guitar.id !== action.payload);
		},
		editGuitar: (state, action) => {
			const guitar = state.value.find((guitar) => guitar.id === action.payload.id);
			guitar.name = action.payload.name;
			guitar.price = action.payload.price;
			guitar.color = action.payload.color;
			guitar.note = action.payload.note;
		},
		addNote: (state, action) => {
			const guitar = state.value.find((guitar) => guitar.id === action.payload.id);
			guitar.note = action.payload;
		},
		deleteNote: (state, action) => {
			const guitar = state.value.find((guitar) => guitar.id === action.payload);
			guitar.note = '';
		},
		editNote: (state, action) => {
			const guitar = state.value.find((guitar) => guitar.id === action.payload.id);
			guitar.note = action.payload.note;
		},
	},
});

export const { addGuitar, deleteGuitar, editGuitar, addNote, deleteNote, editNote } =
	guitarsSlice.actions;

export default guitarsSlice.reducer;
