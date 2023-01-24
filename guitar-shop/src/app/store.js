import { configureStore } from '@reduxjs/toolkit';
import guitarsListReducer from '../features/guitarsList/guitarsListSlice';
import searchSortGuitarsReducer from '../features/searchSortGuitars/searchSortGuitarsSlice';
import dropdownReducer from '../features/sortDropdown/dropdownSlice';
import shoppingCartReducer from '../features/shoppingCart/shoppingCartSlice';
import userInfoReducer from '../features/userInfo/userInfoSlice';
import stringsListReducer from '../features/stringsList/stringsListSlice';
import searchSortStringsReducer from '../features/searchSortStrings/searchSortStrings';
import logger from 'redux-logger';

const rootReducer = {
	guitarsList: guitarsListReducer,
	stringsList: stringsListReducer,
	searchSortGuitars: searchSortGuitarsReducer,
	searchSortStrings: searchSortStringsReducer,
	dropdown: dropdownReducer,
	shoppingCart: shoppingCartReducer,
	userInfo: userInfoReducer,
};
export const store = configureStore({
	reducer: rootReducer,
	middleware: [logger],
});
