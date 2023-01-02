import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";
import GuitarElement from "../features/guitarsList/GuitarElement";
import { removeFromWishlist } from "../features/userInfo/userInfoSlice";

const UserProfile = () => {
	const dispatch = useDispatch();
	const user = useSelector((state) => state.userInfo.user);
	
	return (
		<div className='pt-20 flex justify-center'>
			<div className='flex flex-col items-center w-1/2 shadow-card p-8'>
				<div className='flex flex-col items-center gap-2 w-full'>
					<div className='font-bold text-2xl'>{user.username}</div>
					<div className='font-semibold text-xl'>{user.email}</div>
					<div className="text-center">Wish List:</div>
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