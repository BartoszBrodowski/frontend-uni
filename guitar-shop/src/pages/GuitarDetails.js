import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { addToCart } from '../features/shoppingCart/shoppingCartSlice';

const GuitarDetails = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const guitarsList = useSelector((state) => state.guitarsList.value);
	const stringsList = useSelector((state) => state.stringsList.value);
	const { id } = useParams();
	const guitar = guitarsList.find((guitar) => guitar.id === id);
	const strings = stringsList.filter((string) => string.id === guitar.stringsId);
	const navigateToStringsHandler = () => {
		navigate('/strings/' + guitar.stringsId);
	};

	const navigateEditGuitarHandler = () => {
		navigate('/guitars/edit/' + guitar.id);
	};

	const addToCartHandler = () => {
		dispatch(addToCart(guitar));
		navigate('/shopping-cart');
	};

	return (
		<div className='flex justify-center items-center w-screen h-screen'>
			<button className='absolute left-4 top-20 font-semibold' onClick={() => navigate(-1)}>
				{'<<< Go Back'}
			</button>
			<div className='flex flex-col items-center w-[1200px]'>
				<h1 className='font-bold text-4xl mb-8'>{guitar.name}</h1>
				<div className='grid grid-cols-3 items-center'>
					<img className='h-78' src={require('../images/' + guitar.image)} alt='Guitar' />
					<div className='flex flex-col gap-8 justify-center text-2xl items-center border-l-2 border-r-2 border-orange-500 h-full'>
						<div>{guitar.description}</div>
						<div className='flex flex-col items-center text-gray-400'>
							Strings:
							<div
								className='hover:text-gray-800 hover:cursor-pointer duration-200'
								onClick={navigateToStringsHandler}>
								{strings[0].name}
							</div>
						</div>
					</div>
					<div className='flex flex-col items-center justify-center p-4 h-full'>
						<div className='text-green-700 font-bold text-2xl'>
							Price: {guitar.price}
						</div>
						<button
							className='text-white bg-green-500 font-bold text-4xl p-2 rounded hover:bg-green-700 duration-200'
							onClick={addToCartHandler}>
							Add to cart
						</button>
						<button className='orange-button mt-4' onClick={navigateEditGuitarHandler}>
							Edit Guitar
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default GuitarDetails;
