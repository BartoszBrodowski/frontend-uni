import { removeFromCart } from './shoppingCartSlice';
import { useDispatch } from 'react-redux';

const ShoppingCartItem = ({ keyId, item }) => {
	const dispatch = useDispatch();
	return (
		<div className='grid grid-cols-3 items-center border-b-2 border-orange-500 py-2'>
			<div className='flex justify-center'>
				<img className='w-40' src={require('../../images/' + item.image)} alt='Cart Item' />
			</div>
			<div className='flex flex-col items-center'>
				<h1 className='font-semibold'>{item.name}</h1>
				<p className='text-green-500'>${item.price}</p>
				{item.color ? <p>{item.color}</p> : null}
			</div>
			<div className='flex justify-center'>
				<button
					className='duration-200 bg-red-500 text-white p-1 font-semibold rounded hover:bg-red-700'
					onClick={() => dispatch(removeFromCart(keyId))}>
					Remove from Cart
				</button>
			</div>
		</div>
	);
};

export default ShoppingCartItem;
