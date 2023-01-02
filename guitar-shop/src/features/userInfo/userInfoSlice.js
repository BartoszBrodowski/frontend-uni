import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	user: {
		username: "",
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		wishlist: [],
		loggedIn: false,
	}
};

export const userInfoSlice = createSlice({
	name: "userInfo",
	initialState,	
	reducers: {
		setCredentials: (state, action) => {
			state.user.username = action.payload.username;
			state.user.firstName = action.payload.firstName;
			state.user.lastName = action.payload.lastName;
			state.user.email = action.payload.email;
			state.user.password = action.payload.password;
			state.user.loggedIn = true;
			state.user.wishlist = action.payload.wishlist;
		},
		addToWishlist: (state, action) => {
			state.wishlist.push(action.payload);
		},
		removeFromWishlist: (state, action) => {
			state.wishlist = state.wishlist.filter((item) => item.id !== action.payload.id);
		},
	},
});

export const { setCredentials, addToWishlist, removeFromWishlist } = userInfoSlice.actions;

export default userInfoSlice.reducer;