import ShoppingCartList from "../features/shoppingCart/ShoppingCartList"
import Checkout from "../features/shoppingCart/Checkout"

const ShoppingCart = () => {
	return (
		<div className='flex justify-center w-screen h-screen'>
			<div className="grid grid-cols-3 w-[70%] mt-20 justify-center">
				<ShoppingCartList />
				<Checkout />
			</div>
		</div>
	)
}

export default ShoppingCart