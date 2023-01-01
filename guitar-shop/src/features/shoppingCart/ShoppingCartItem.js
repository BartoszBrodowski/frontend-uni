import { removeFromCart } from "./shoppingCartSlice"
import { useDispatch } from "react-redux"

const ShoppingCartItem = ({ keyId, guitar }) => {
	const dispatch = useDispatch()
	return (
		<div className='grid grid-cols-3 items-center border-b-2 border-orange-500'>
			<div className="flex justify-center">
				<img
					className="w-40"
					src={require('../../images/' + guitar.image)}
					alt='Guitar'
				/>
			</div>
			<div className='flex flex-col items-center'>
				<h1 className="font-semibold">{guitar.name}</h1>
				<p className="text-green-500">${guitar.price}</p>
				<p>{guitar.color}</p>
			</div>
			<div className='flex justify-center'>
				<button className='bg-red-500 text-white p-1 font-semibold rounded' onClick={() => dispatch(removeFromCart(keyId))}>Remove from Cart</button>
			</div>
		</div>
	)
}

export default ShoppingCartItem