import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../shoppingCart/shoppingCartSlice';
import { filterByType } from './guitarsListSlice';

const GuitarComponent = ({ guitar }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const showGuitarDetails = (id) => {
		navigate('/guitar/details/' + id.toString());
	};

	return (
		<div className='flex flex-col items-center'>
			<div className='flex flex-col items-center'>
				{guitar.image === null ? (
					<div>Placeholder</div>
				) : (
					<img
						className='hover:cursor-pointer h-[400px]'
						onClick={() => showGuitarDetails(guitar.id)}
						src={require('../../images/' + guitar.image)}
						alt='Guitar'
					/>
				)}
				<div className='font-xl'>{guitar.name}</div>
				<p className='text-slate-500'>{guitar.type}</p>
				<p className='text-green-500'>${guitar.price}</p>
			</div>
			<button
				className='green-button'
				type='button'
				onClick={() => dispatch(addToCart(guitar))}>
				Add to Cart
			</button>
		</div>
	);
};

export default GuitarComponent;
