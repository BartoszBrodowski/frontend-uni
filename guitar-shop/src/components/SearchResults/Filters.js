import Dropdown from '../../features/dropdown/Dropdown';
import { useSelector, useDispatch } from 'react-redux';
import { showDropdown } from '../../features/dropdown/dropdownSlice';

const Filters = () => {
	const currentSearchSort = useSelector((state) => state.sortSearch.value);
	const displayDropdown = useSelector((state) => state.dropdown.value);
	const dispatch = useDispatch();
	const dropdownOpenHanlder = () => {
		dispatch(showDropdown());
		console.log(displayDropdown);
	};
	return (
		<div className='flex items-center gap-2 px-4 py-8'>
			<form className='w-60' onClick={dropdownOpenHanlder}>
				<div className='flex items-center border-orange-500 border h-10 z-10 px-2'>
					<h1>
						Sort by:{' '}
						<span className='text-slate-400 ml-2'>
							{currentSearchSort}
						</span>
					</h1>
				</div>
				{displayDropdown && <Dropdown />}
			</form>
		</div>
	);
};

export default Filters;
