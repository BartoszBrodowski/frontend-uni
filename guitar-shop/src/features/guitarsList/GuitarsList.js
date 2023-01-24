import { useSelector, useDispatch } from 'react-redux';
import GuitarComponent from './GuitarComponent';
import { addToWishlist } from '../userInfo/userInfoSlice';
import { addToList, regexSearch } from './guitarsListSlice';
import { useNavigate } from 'react-router-dom';

const GuitarsList = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const searchValue = useSelector((state) => state.guitarsList.searchValue);
	const guitarsListSearchFiltered = useSelector((state) => regexSearch(state, searchValue));

	const addGuitarButtonHandler = () => {
		navigate('/guitars/add');
	};

	return (
		<div className='border-t-2 border-orange-500 pt-4 flex flex-col items-center'>
			<button className='orange-button w-[10%]' onClick={() => addGuitarButtonHandler()}>
				Add Guitar
			</button>
			<ul className='grid grid-cols-3 grid-rows-3'>
				{guitarsListSearchFiltered.map((guitar, index) => {
					return (
						<li className='flex flex-col items-center gap-2' key={index}>
							<GuitarComponent guitar={guitar} />
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
