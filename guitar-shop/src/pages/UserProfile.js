import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom";

const UserProfile = () => {
	const user = useSelector((state) => state.userInfo.user);
	console.log(user)
	const { username } = useParams();
	console.log(username)
	return (
		<div className='pt-20 flex justify-center h-screen'>
			<div className='flex flex-col items-center w-1/2 shadow-card h-[80%]'>
				<div className='w-44 h-44 bg-orange-600 rounded-full mb-12'></div>
				<div className='flex flex-col items-center gap-2'>
					<div className='font-bold text-2xl'>{user.username}</div>
					<div className='font-semibold text-xl'>{user.email}</div>
					<Link to='/user-profile/wish-list'>
						<div>Wish List:</div>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default UserProfile