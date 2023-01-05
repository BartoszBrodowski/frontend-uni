import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { addToCart } from "../shoppingCart/shoppingCartSlice"
import { filterByType } from "./guitarsListSlice"
import { changeType } from "../sortSearch/searchSortSlice"

const GuitarElement = ({ guitar }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	
	const showGuitarDetails = (id) => {
		navigate('/details/' + id.toString());
	};

	const clickTypeHandler = () => {
		console.log('test')
		dispatch(changeType(guitar.type));
		dispatch(filterByType(guitar.type));
	};

	return (
			<div
				className='flex flex-col items-center'
			>
				<div className='flex flex-col items-center'>
					<img
						className="hover:cursor-pointer"
						onClick={() => showGuitarDetails(guitar.id)}
						src={require('../../images/' + guitar.image)}
						alt='Guitar'
					/>
					<div className='font-xl'>{guitar.name}</div>
					<p className="text-slate-500 hover:cursor-pointer hover:text-slate-800 duration-200"
						onClick={clickTypeHandler}
					>
						{guitar.type}
					</p>
					<p className='text-green-500'>
						${guitar.price}
					</p>
				</div>
				<button className='green-button' type='button' onClick={() => dispatch(addToCart(guitar))}>Add to Cart</button>
			</div>
	)
}

export default GuitarElement