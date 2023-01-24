import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import GuitarComponent from '../features/guitarsList/GuitarComponent';
import { removeFromWishlist } from '../features/userInfo/userInfoSlice';
import Address from '../features/userInfo/Address';
import axios from 'axios';

const UserProfile = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const user = useSelector((state) => state.userInfo.user);

	const deleteAddress = async () => {
		await axios.delete(`http://localhost:8000/deleteAddress/${user.username}`);
	};
	return (
		<div className='pt-20 flex justify-center'>
			<button className='absolute left-4 top-20 font-semibold' onClick={() => navigate(-1)}>
				{'<<< Go Back'}
			</button>
			<div className='flex flex-col items-center w-1/2 shadow-card p-8'>
				<div className='flex flex-col items-center gap-2 w-full'>
					<div className='font-bold text-2xl'>{user.username}</div>
					<div className='font-semibold text-xl'>{user.email}</div>
					<div className='grid grid-cols-2 items-center w-4/5 text-center'>
						<div>
							<Address address={user.shippingAddress} />
						</div>
						<div className='flex flex-col col-start-3 gap-2'>
							<button
								className='orange-button'
								type='button'
								onClick={() => navigate(`/user-profile/${user.username}/address`)}>
								Edit Address
							</button>
							<button className='orange-button' onClick={deleteAddress}>
								Delete Address
							</button>
						</div>
					</div>
					<div className='text-center mt-12 font-bold'>Wish List:</div>
					<ul className='grid grid-cols-3 items-center justify-center w-full'>
						{user.wishlist.map((guitar, index) => (
							<li
								className='flex flex-col gap-2 items-center w-full cols-span-1'
								key={index}>
								<GuitarComponent guitar={guitar} />
								<button
									className='orange-button bg-red-500 text-sm'
									onClick={() => dispatch(removeFromWishlist(index))}>
									Remove from wishlist
								</button>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default UserProfile;
