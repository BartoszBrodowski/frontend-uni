import { useDispatch } from 'react-redux';
import {
	changeSearchValue,
	filterByType,
	sortAtoZ,
	sortPriceHighToLow,
	sortPriceLowToHigh,
	sortZtoA,
	sortByDate,
} from '../../features/guitarsList/guitarsListSlice';
import { useState } from 'react';

const GuitarsFilters = () => {
	const [checked, setChecked] = useState(false);
	const [selectValue, setSelectValue] = useState('All');
	const [dateSort, setDateSort] = useState(false);
	const [currentSort, setCurrentSort] = useState('A-Z');
	const [showOnlyAcoustics, setShowOnlyAcoustics] = useState(false);
	const dispatch = useDispatch();

	const searchHandler = (e) => {
		dispatch(changeSearchValue(e.target.value));
	};

	const typeSelectHandler = (e) => {
		dispatch(filterByType(e.target.value));
		setSelectValue(e.target.value);
		setCurrentSort('A-Z');
		if (showOnlyAcoustics) {
			setChecked(!checked);
			setShowOnlyAcoustics(!showOnlyAcoustics);
		}
	};

	const showOnlyAcousticsHandler = () => {
		setShowOnlyAcoustics(!showOnlyAcoustics);
		setChecked(!checked);
		setSelectValue('All');
		if (showOnlyAcoustics) {
			dispatch(filterByType('All'));
			setSelectValue('All');
			setCurrentSort('A-Z');
		} else {
			dispatch(filterByType('Acoustic'));
		}
	};

	const sortSelectHandler = (e) => {
		if (e.target.value === 'A-Z') {
			setCurrentSort('A-Z');
			dispatch(sortAtoZ());
		}
		if (e.target.value === 'Z-A') {
			setCurrentSort('Z-A');
			dispatch(sortZtoA());
		}
		if (e.target.value === 'Price: Low to High') {
			setCurrentSort('Price: Low to High');
			dispatch(sortPriceLowToHigh());
		}
		if (e.target.value === 'Price: High to Low') {
			setCurrentSort('Price: High to Low');
			dispatch(sortPriceHighToLow());
		}
		if (e.target.value === 'Date') {
			setCurrentSort('Date');
			dispatch(sortByDate(dateSort));
		}
	};

	return (
		<div className='flex items-center gap-2 px-4 py-8'>
			<input
				className='border-orange-500 border h-10 p-2 outline-none'
				placeholder='Search by name'
				type='text'
				onChange={(e) => searchHandler(e)}
			/>
			<form className='w-60'>
				<select
					className='w-60 bg-white border border-orange-500 h-10 p-2'
					name='Sort'
					value={currentSort}
					onChange={(e) => sortSelectHandler(e)}>
					<option value='A-Z'>A-Z</option>
					<option value='Z-A'>Z-A</option>
					<option value='Price: Low to High'>Price: Low to High</option>
					<option value='Price: High to Low'>Price: High to Low</option>
					<option value='Date'>Date {'(newest)'}</option>
				</select>
			</form>
			<select
				value={selectValue}
				className='bg-white border border-orange-500 h-10 p-2'
				onChange={(e) => typeSelectHandler(e)}
				name='Type'>
				<option value='All'>All</option>
				<option value='Stratocaster'>Stratocaster</option>
				<option value='Telecaster'>Telecaster</option>
				<option value='Les Paul'>Les Paul</option>
			</select>
			<div className='flex gap-2 mr-4'>
				<h1>Acoustic Only:</h1>
				<input type='checkbox' checked={checked} onChange={showOnlyAcousticsHandler} />
			</div>
		</div>
	);
};

export default GuitarsFilters;
