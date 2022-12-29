import { configureStore } from '@reduxjs/toolkit';
import guitarsListReducer from '../features/guitarsList/guitarsSlice';
import sortSearchReducer from '../features/sortSearch/searchSortSlice';
import dropdownReducer from '../features/dropdown/dropdownSlice';

export const store = configureStore({
	reducer: {
		guitarsList: guitarsListReducer,
		sortSearch: sortSearchReducer,
		dropdown: dropdownReducer,
	},
});
