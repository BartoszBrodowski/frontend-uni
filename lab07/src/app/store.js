import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import guitarsReducer from '../features/guitars/guitarsSlice';

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		guitars: guitarsReducer,
	},
});
