import { useSelector } from "react-redux"
import ShoppingCartItem from "./ShoppingCartItem"
import { AiOutlineArrowLeft } from "react-icons/ai"
import { Link } from "react-router-dom"

const ShoppingCartList = () => {
	const shoppingCartList = useSelector((state) => state.shoppingCart.value)
	return (
		<div className="flex flex-col items-center col-span-2">
			<h1 className="text-2xl font-bold text-center pb-4">Shopping Cart</h1>
			<ul className="border-t-2 w-4/5 mb-12">
				{shoppingCartList.length === 0 && <div className="text-center mt-20">Your shopping cart is empty</div>}
				{shoppingCartList.map((guitar, index) => (
					<li key={index}>
						<ShoppingCartItem keyId={index} guitar={guitar} />
					</li>
				))}
			</ul>
			<Link to='/'>
				<button className="bg-orange-500 text-white font-semibold text-xl p-2 rounded flex items-center"><AiOutlineArrowLeft /><div>Continue Shopping</div></button>
			</Link>
		</div>
	)
}

export default ShoppingCartList