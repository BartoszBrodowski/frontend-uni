import { configureStore } from '@reduxjs/toolkit';
import guitarsReducer from '../features/guitars/guitarsSlice';
import logger from 'redux-logger';

export const store = configureStore({
	reducer: {
		guitars: guitarsReducer,
	},
	middleware: [logger],
});
