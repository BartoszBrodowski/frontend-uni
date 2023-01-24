import { configureStore } from '@reduxjs/toolkit';
import guitarsListReducer from '../features/guitarsList/guitarsListSlice';
import searchSortGuitarsReducer from '../features/searchSortGuitars/searchSortGuitarsSlice';
import shoppingCartReducer from '../features/shoppingCart/shoppingCartSlice';
import userInfoReducer from '../features/userInfo/userInfoSlice';
import stringsListReducer from '../features/stringsList/stringsListSlice';
import logger from 'redux-logger';

const rootReducer = {
	guitarsList: guitarsListReducer,
	stringsList: stringsListReducer,
	searchSortGuitars: searchSortGuitarsReducer,
	shoppingCart: shoppingCartReducer,
	userInfo: userInfoReducer,
};
export const store = configureStore({
	reducer: rootReducer,
	middleware: [logger],
});
