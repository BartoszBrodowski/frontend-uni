import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { addToCart } from '../features/shoppingCart/shoppingCartSlice';

const StringsDetails = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const stringsList = useSelector((state) => state.stringsList.value);
	const strings = stringsList.find((item) => item.id === id);

	const addToCartHandler = () => {
		dispatch(addToCart(strings));
		navigate('/shopping-cart');
	};

	return (
		<div className='flex flex-col justify-center items-center w-screen h-screen'>
			<button className='absolute left-4 top-20 font-semibold' onClick={() => navigate(-1)}>
				{'<<< Go Back'}
			</button>
			<div className='flex flex-col gap-8 w-1/2'>
				<div className='flex items-center gap-80'>
					<img
						className='w-[400px]'
						onClick={null}
						src={require('../images/' + strings.image)}
						alt='Strings'
					/>
					<div className='flex items-center gap-4 text-2xl'>
						<div className='text-green-500 font-semibold'>{strings.price}$</div>
						<button
							className='green-button p-2'
							type='button'
							onClick={addToCartHandler}>
							Add to Cart
						</button>
					</div>
				</div>
				<div className='text-4xl'>Name: {strings.name}</div>
				<div className='text-lg'>Description: {strings.description}</div>
			</div>
		</div>
	);
};

export default StringsDetails;
