import { useSelector, useDispatch } from 'react-redux';
import GuitarElement from './GuitarElement';
import { addToWishlist } from '../userInfo/userInfoSlice';
import { useEffect } from 'react';
import { regexSearch } from './guitarsListSlice';

const GuitarsList = () => {
	const dispatch = useDispatch();
	const searchValue = useSelector((state) => state.guitarsList.searchValue);
	const sortType = useSelector((state) => state.sortSearch.type);
	const guitarsListSearchFiltered = useSelector((state) => regexSearch(state, searchValue));

	return (
		<div className='border-t-2 border-orange-500 pt-4'>
			<ul className='grid grid-cols-3 grid-rows-3'>
				{guitarsListSearchFiltered.map((guitar, index) => {
					return (
						<li className='flex flex-col items-center gap-2' key={index}>
							<GuitarElement guitar={guitar} />
							<button
								className='green-button'
								type='button'
								onClick={() => dispatch(addToWishlist(guitar))}>
								Add to Wish-list
							</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default GuitarsList;
