import { configureStore } from '@reduxjs/toolkit';
import guitarsListReducer from '../features/guitarsList/guitarsListSlice';
import sortSearchReducer from '../features/sortSearch/searchSortSlice';
import dropdownReducer from '../features/dropdown/dropdownSlice';
import shoppingCartReducer from '../features/shoppingCart/shoppingCartSlice';

export const store = configureStore({
	reducer: {
		guitarsList: guitarsListReducer,
		sortSearch: sortSearchReducer,
		dropdown: dropdownReducer,
		shoppingCart: shoppingCartReducer,
	},
});
