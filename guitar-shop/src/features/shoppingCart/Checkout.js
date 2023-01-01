import { useSelector } from "react-redux"

const Checkout = () => {
	const shoppingCartList = useSelector((state) => state.shoppingCart.value)
	const totalPrice = shoppingCartList.reduce((acc, item) => acc + item.price, 0)
	const itemsAmount = shoppingCartList.length
	return (
		<div className='flex flex-col items-center justify-between shadow-card p-4 pt-2 h-[300px]'>
			<div className='flex flex-col justify-between w-full h-full'>
				<div>
					<div className='flex justify-between'>
						<div className='text-xl'>{itemsAmount} Items</div>
						<div className='text-xl'>${totalPrice}</div>
					</div>
					<div className='flex justify-between'>
						<div className='text-sm'>Shipping:</div>
						<div className='text-sm'>Free</div>
					</div>
					<div className='flex justify-between'>
						<div className='text-sm'>Discount:</div>
						<div className='text-sm'>None</div>
					</div>
				</div>
				<div className="flex justify-between pb-4">
					<div className="text-2xl font-semibold">Total: </div>
					<div className="text-2xl font-semibold">${totalPrice}</div>
				</div>
			</div>
			<button className='orange-button' type='submit'>Checkout</button>
		</div>
	)
}

export default Checkout