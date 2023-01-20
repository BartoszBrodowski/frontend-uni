import Dropdown from '../../features/sortDropdown/Dropdown';
import { useSelector, useDispatch } from 'react-redux';
import { showDropdown } from '../../features/sortDropdown/dropdownSlice';
import { changeSearchValue, filterByType } from '../../features/guitarsList/guitarsListSlice';
import { useState } from 'react';
import { changeSort } from '../../features/sortSearch/searchSortSlice';
import { sortByDate } from '../../features/guitarsList/guitarsListSlice';

const Filters = () => {
	const [selectValue, setSelectValue] = useState('All');
	const [dateSort, setDateSort] = useState(false);
	const currentSearchSort = useSelector((state) => state.sortSearch.value);
	const currentSearchType = useSelector((state) => state.sortSearch.type);
	const displayDropdown = useSelector((state) => state.dropdown.value);
	const helperSelector = useSelector((state) => state.guitarsList);
	const [showOnlyAcoustics, setShowOnlyAcoustics] = useState(false);
	const dispatch = useDispatch();

	const dropdownOpenHanlder = () => {
		dispatch(showDropdown());
	};

	const searchHandler = (e) => {
		dispatch(changeSearchValue(e.target.value));
	};

	const typeSelectHandler = (e) => {
		dispatch(filterByType(e.target.value));
		setSelectValue(e.target.value);
		dispatch(changeSort('A-Z'));
	};

	const showOnlyAcousticsHandler = () => {
		setShowOnlyAcoustics(!showOnlyAcoustics);
		if (showOnlyAcoustics) {
			dispatch(filterByType('All'));
			dispatch(changeSort('A-Z'));
			setSelectValue('All');
		} else {
			dispatch(filterByType('Acoustic'));
		}
	};

	const sortByDateHandler = () => {
		setDateSort(!dateSort);
		dispatch(sortByDate(dateSort));
		dispatch(changeSort('A-Z'));
	};

	return (
		<div className='flex items-center gap-2 px-4 py-8'>
			<input
				className='border-orange-500 border h-10 p-2 outline-none'
				placeholder='Search'
				type='text'
				onChange={(e) => searchHandler(e)}
			/>
			<form className='w-60' onClick={dropdownOpenHanlder}>
				<div className='flex items-center border-orange-500 border h-10 z-10 px-2'>
					<h1>
						Sort by: <span className='text-slate-400 ml-2'>{currentSearchSort}</span>
					</h1>
				</div>
				{displayDropdown && <Dropdown />}
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
				<input type='checkbox' onChange={showOnlyAcousticsHandler} />
			</div>
			<div className='flex gap-2 mr-4'>
				<h1>Date: </h1>
				<input type='checkbox' onChange={sortByDateHandler} />
			</div>
		</div>
	);
};

export default Filters;
