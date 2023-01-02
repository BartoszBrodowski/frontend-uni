import { AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
	const userStatus = useSelector((state) => state.userStatus.value);
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
			<div className='flex flex-row-reverse gap-4 w-1/5 pr-4'>
				<Link to='/shopping-cart'>
					<AiOutlineShoppingCart className='text-white text-3xl hover:cursor-pointer' />
				</Link>
				{userStatus ? <AiOutlineUser className='text-white text-3xl hover:cursor-pointer' /> : <Link to='/login'><div className='text-white text-lg font-semibold'>Log In</div></Link>}
			</div>
		</nav>
	);
};

export default Navbar;
