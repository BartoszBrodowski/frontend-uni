import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeFromWishlist } from '../features/userInfo/userInfoSlice';
import Address from '../features/userInfo/Address';
import axios from 'axios';
import ItemComponent from '../features/guitarsList/ItemComponent';

const UserProfile = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const user = useSelector((state) => state.userInfo.user);

	const deleteAddress = async () => {
		await axios.delete(`http://localhost:8000/deleteAddress/${user.username}`);
	};
	return (
		<div className='pt-28 flex justify-center pb-10'>
			<button className='absolute left-4 top-28 font-semibold' onClick={() => navigate(-1)}>
				{'<<< Go Back'}
			</button>
			<div className='flex flex-col items-center w-[70%] shadow-card rounded py-2'>
				<div className='flex flex-col items-center gap-2 w-full'>
					<div className='text-center w-full'>
						<div className='font-bold text-2xl'>{user.username}</div>
						<div className='font-semibold text-xl'>{user.email}</div>
					</div>
					<div className='grid grid-cols-2 items-center w-full px-20 text-center border-b-2 pb-8 border-orange-500'>
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
						{user.wishlist.map((item, index) => (
							<li
								className='flex flex-col gap-2 items-center w-full cols-span-1 h-[500px]'
								key={index}>
								<ItemComponent item={item} />
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
