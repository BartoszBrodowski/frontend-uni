import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../shoppingCart/shoppingCartSlice';
import { addToWishlist } from '../userInfo/userInfoSlice';

const StringsElement = ({ strings }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const showStringsElement = () => {
		navigate('/strings/' + strings.id);
		console.log('test struny');
	};

	const addToCartHandler = () => {
		dispatch(addToCart(strings));
		navigate('/shopping-cart');
	};

	const addToWishlistHandler = () => {
		dispatch(addToWishlist(strings));
	};

	return (
		<div className='flex flex-col gap-2 items-center'>
			<div className='flex flex-col items-center'>
				{strings.image === null ? (
					<div>Placeholder</div>
				) : (
					<img
						className='hover:cursor-pointer h-[300px]'
						src={require('../../images/' + strings.image)}
						alt='strings'
						onClick={showStringsElement}
					/>
				)}
				<div className='font-xl'>{strings.name}</div>
				<p className='text-slate-500'>{strings.type}</p>
				<p className='text-green-500'>${strings.price}</p>
			</div>
			<button className='green-button' type='button' onClick={() => addToCartHandler()}>
				Add to Cart
			</button>
			<button className='green-button' type='button' onClick={() => addToWishlistHandler()}>
				Add to Wishlist
			</button>
		</div>
	);
};

export default StringsElement;
