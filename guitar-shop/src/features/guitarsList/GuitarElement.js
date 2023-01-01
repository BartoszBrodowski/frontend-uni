import { useDispatch } from "react-redux"
import { addToCart } from "../shoppingCart/shoppingCartSlice"

const GuitarElement = ({ guitar, showGuitarDetails }) => {
	const dispatch = useDispatch()
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
				<button className='bg-green-500 rounded p-1 text-white font-semibold' type='button' onClick={() => dispatch(addToCart(guitar))}>Add to Cart</button>
			</div>
	)
}

export default GuitarElement