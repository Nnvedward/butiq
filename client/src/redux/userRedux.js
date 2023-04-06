import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	currentUser: null,
	isFetching: false,
	error: false,
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		// Login
		loginStart: (state) => {
			state.isFetching = true;
		},
		loginSuccess: (state, action) => {
			state.isFetching = false;
			state.currentUser = action.payload;
		},
		loginFailure: (state) => {
			state.isFetching = false;
			state.error = true;
		},

		// Sign Up
		signUpStart: (state) => {
			state.isFetching = true;
		},
		signUpSuccess: (state, action) => {
			state.isFetching = false;
			state.currentUser = action.payload;
		},
		signUpFailure: (state) => {
			state.isFetching = false;
			state.error = true;
		},
	},
});

export const {
	loginStart,
	loginSuccess,
	loginFailure,
	signUpStart,
	signUpSuccess,
	signUpFailure,
} = userSlice.actions;

export default userSlice.reducer;
export const selectCurrentUser = (state) => state.user;
