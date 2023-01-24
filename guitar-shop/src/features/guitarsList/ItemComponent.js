import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../shoppingCart/shoppingCartSlice';

const ItemComponent = ({ item }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const showGuitarDetails = (id) => {
		if (item.color) {
			navigate('/guitar/details/' + id.toString());
		} else {
			navigate('/strings/' + id.toString());
		}
	};

	return (
		<div className='flex flex-col items-center'>
			<div className='flex flex-col items-center'>
				{item.image === null ? (
					<div>Placeholder</div>
				) : (
					<img
						className='hover:cursor-pointer h-[300px]'
						onClick={() => showGuitarDetails(item.id)}
						src={require('../../images/' + item.image)}
						alt='Guitar'
					/>
				)}
				<div className='font-xl'>{item.name}</div>
				<p className='text-slate-500'>{item.type}</p>
				<p className='text-green-500'>${item.price}</p>
			</div>
			<button
				className='green-button'
				type='button'
				onClick={() => dispatch(addToCart(item))}>
				Add to Cart
			</button>
		</div>
	);
};

export default ItemComponent;
