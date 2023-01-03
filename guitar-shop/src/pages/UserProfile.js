import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";
import GuitarElement from "../features/guitarsList/GuitarElement";
import { removeFromWishlist } from "../features/userInfo/userInfoSlice";
import Address from "../features/userInfo/Address";

const UserProfile = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const user = useSelector((state) => state.userInfo.user);
	const address = user.address
	return (
		<div className='pt-20 flex justify-center'>
			<div className='flex flex-col items-center w-1/2 shadow-card p-8'>
				<div className='flex flex-col items-center gap-2 w-full'>
					<div className='font-bold text-2xl'>{user.username}</div>
					<div className='font-semibold text-xl'>{user.email}</div>
					<div className="grid grid-cols-2 items-center w-4/5 text-center">
						<div>
							<Address />
						</div>
						<div className="col-start-3">
							<button className="orange-button" type='button' onClick={() => navigate(`/user-profile/${user.username}/address`)}>Edit Address</button>
						</div>
					</div>
					<div className="text-center mt-12 font-bold">Wish List:</div>
					<ul className="grid grid-cols-3 items-center justify-center w-full">
						{user.wishlist.map((guitar, index) => (
							<li className="flex flex-col gap-2 items-center w-full cols-span-1" key={index}>
								<GuitarElement guitar={guitar} />
								<button className="orange-button bg-red-500 text-sm" onClick={() => dispatch(removeFromWishlist(index))}>Remove from wishlist</button>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	)
}

export default UserProfile