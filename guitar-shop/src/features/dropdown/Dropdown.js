import { useDispatch } from 'react-redux';
import {
	sortAtoZ,
	sortZtoA,
	sortPriceHighToLow,
	sortPriceLowToHigh,
} from '../guitarsList/guitarsSlice';
import { changeSort } from '../sortSearch/searchSortSlice';
import { showDropdown } from './dropdownSlice';

const Dropdown = () => {
	const dispatch = useDispatch();

	const sortAtoZHandler = () => {
		dispatch(sortAtoZ());
		dispatch(showDropdown());
		dispatch(changeSort('A-Z'));
	};

	const sortZtoAHanlder = () => {
		dispatch(sortZtoA());
		dispatch(showDropdown());
		dispatch(changeSort('Z-A'));
	};

	const sortPriceHighToLowHandler = () => {
		dispatch(sortPriceHighToLow());
		dispatch(showDropdown());
		dispatch(changeSort('Price: High to Low'));
	};

	const sortPriceLowToHighHandler = () => {
		dispatch(sortPriceLowToHigh());
		dispatch(showDropdown());
		dispatch(changeSort('Price: Low to High'));
	};

	return (
		<ul
			className='shadow-dropdown absolute w-60'
			onClick={() => dispatch(showDropdown())}
		>
			<li
				className='bg-slate-100 p-2 hover:bg-blue-500 hover:cursor-pointer hover:text-white'
				onClick={sortAtoZHandler}
			>
				A-Z
			</li>
			<li
				className='bg-slate-100 p-2 hover:bg-blue-500 hover:cursor-pointer hover:text-white'
				onClick={sortZtoAHanlder}
			>
				Z-A
			</li>
			<li
				className='bg-slate-100 p-2 hover:bg-blue-500 hover:cursor-pointer hover:text-white'
				onClick={sortPriceLowToHighHandler}
			>
				Price: Low to High
			</li>
			<li
				className='bg-slate-100 p-2 hover:bg-blue-500 hover:cursor-pointer hover:text-white'
				onClick={sortPriceHighToLowHandler}
			>
				Price: High to Low
			</li>
		</ul>
	);
};

export default Dropdown;
