import { configureStore } from '@reduxjs/toolkit';
import guitarsReducer from '../features/guitars/guitarsSlice';

export default configureStore({
	reducer: {
		guitars: guitarsReducer,
	},
});
