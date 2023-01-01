import { AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className='flex items-center justify-between bg-orange-500 h-12 w-screen p-4 py-8 absolute'>
			<div className='text-white text-3xl w-1/5 font-bold hover:cursor-pointer'>
				<Link to='/'>Guitar shop</Link>
			</div>
			<input
				className='placeholder:text-grey-500 bg-white rounded-full h-8 w-1/4 pl-4 focus:outline-none'
				type='text'
				placeholder='Search'
			/>
			<div className='flex items-center gap-4 w-1/5 pl-48'>
				<Link to='/shopping-cart'>
					<AiOutlineShoppingCart className='text-white text-3xl hover:cursor-pointer' />
				</Link>
				<AiOutlineUser className='text-white text-3xl hover:cursor-pointer' />
			</div>
		</nav>
	);
};

export default Navbar;
