import { AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userLogout } from '../features/userInfo/userInfoSlice';
import axios from 'axios';

const Navbar = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const user = useSelector((state) => state.userInfo.user);
	const { loggedIn } = useSelector((state) => state.userInfo.user);
	const logOut = async () => {
		dispatch(userLogout());
		navigate('/login');
		await axios.post('http://localhost:8000/logout', { email: user.email });
	};
	return (
		<nav className='flex items-center justify-between bg-orange-500 h-12 w-full p-[15%] py-8 absolute'>
			<div className='text-white text-3xl w-1/5 font-bold hover:cursor-pointer'>
				<Link to='/'>Guitar shop</Link>
			</div>
			<div className='flex gap-4 text-white font-semibold text-2xl'>
				<div className='hover:cursor-pointer' onClick={() => navigate('/')}>
					Guitars
				</div>
				<div className='hover:cursor-pointer' onClick={() => navigate('/strings')}>
					Strings
				</div>
			</div>
			<div className='flex flex-row-reverse gap-4 w-1/5'>
				<Link to={loggedIn ? '/shopping-cart' : '/login'}>
					<AiOutlineShoppingCart className='text-white text-3xl hover:cursor-pointer' />
				</Link>
				{user.username ? (
					<div className='flex gap-4 items-center'>
						<div
							className='text-white font-semibold text-lg hover:cursor-pointer'
							onClick={logOut}>
							Log Out
						</div>
						<AiOutlineUser
							className='text-white text-3xl hover:cursor-pointer'
							onClick={() => navigate(`/user-profile/${user.username}`)}
						/>
					</div>
				) : (
					<Link to='/login'>
						<div className='text-white text-lg font-semibold'>Log In</div>
					</Link>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
