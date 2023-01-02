import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	user: {
		username: "",
		firstName: "",
		lastName: "",
		email: "",
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
			state.user.loggedIn = true;
			state.user.wishlist = action.payload.wishlist;
		},
		addToWishlist: (state, action) => {
			state.user.wishlist.push(action.payload);
		},
		removeFromWishlist: (state, action) => {
			state.user.wishlist = state.user.wishlist.map((guitar) => guitar).filter((guitar, index) => index !== action.payload);
		},
	},
});

export const { setCredentials, addToWishlist, removeFromWishlist } = userInfoSlice.actions;

export default userInfoSlice.reducer;