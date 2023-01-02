import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { addToCart } from "../shoppingCart/shoppingCartSlice"
import { addToWishlist } from "../userInfo/userInfoSlice"

const GuitarElement = ({ guitar }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const showGuitarDetails = (id) => {
		navigate('/details/' + id.toString());
	};
	return (
			<div
				className='flex flex-col items-center hover:cursor-pointer'
			>
				<div className='flex flex-col items-center hover:cursor-pointer' onClick={() => showGuitarDetails(guitar.id)}>
					<img
						src={require('../../images/' + guitar.image)}
						alt='Guitar'
					/>
					<div className='font-xl'>{guitar.name}</div>
					<p className='text-grey text-green-500'>
						${guitar.price}
					</p>
				</div>
				<button className='green-button' type='button' onClick={() => dispatch(addToCart(guitar))}>Add to Cart</button>
			</div>
	)
}

export default GuitarElement