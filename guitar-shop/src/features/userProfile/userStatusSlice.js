import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	value: false,
};

export const userStatusSlice = createSlice({
	name: 'userStatus',
	initialState,
	reducers: {
		userLogin: (state) => {
			state.value = true;
		},
		userLogout: (state) => {
			state.value = false;
		},
	},
});

export const { userLogin, userLogout } = userStatusSlice.actions;

export default userStatusSlice.reducer;