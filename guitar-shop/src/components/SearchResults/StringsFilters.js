import { useDispatch, useSelector } from 'react-redux';
import { changeSort } from '../../features/searchSortStrings/searchSortStrings';
import {
	sortAtoZ,
	sortZtoA,
	sortPriceLowToHigh,
	sortPriceHighToLow,
	changeSearchValue,
} from '../../features/stringsList/stringsListSlice';
import { regexSearch } from '../../features/stringsList/stringsListSlice';

const StringsFilters = () => {
	const dispatch = useDispatch();
	const sortValue = useSelector((state) => state.searchSortStrings.value);

	const typeSelectHandler = (e) => {
		if (e.target.value === 'A-Z') dispatch(sortAtoZ());
		if (e.target.value === 'Z-A') dispatch(sortZtoA());
		if (e.target.value === 'Price: Low to High') dispatch(sortPriceLowToHigh());
		if (e.target.value === 'Price: High to Low') dispatch(sortPriceHighToLow());
	};

	const searchHandler = (e) => {
		dispatch(changeSearchValue(e.target.value));
	};

	return (
		<div className='flex items-center gap-2 px-4 py-8'>
			<input
				className='border-orange-500 border h-10 p-2 outline-none'
				placeholder='Search'
				type='text'
				onChange={(e) => searchHandler(e)}
			/>
			<select
				className='w-60 bg-white border border-orange-500 h-10 p-2'
				name='Sort'
				onChange={(e) => typeSelectHandler(e)}>
				<option value='A-Z'>A-Z</option>
				<option value='Z-A'>Z-A</option>
				<option value='Price: Low to High'>Price: Low to High</option>
				<option value='Price: High to Low'>Price: High to Low</option>
			</select>
			<div className='flex gap-2 mr-4'>
				<h1>Acoustic Only:</h1>
				<input type='checkbox' onChange={null} />
			</div>
			<div className='flex gap-2 mr-4'>
				<h1>Date: </h1>
				<input type='checkbox' onChange={null} />
			</div>
		</div>
	);
};

export default StringsFilters;
