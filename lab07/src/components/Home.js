import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div className='flex flex-col items-center justify-center gap-4 h-screen'>
			<h1 className='text-5xl font-bold my-4'>Welcome to guitar collection</h1>
			<p className='text-xl'>This is a site that shows off a guitar collection.</p>
			<p className='text-xl'>
				If you wont to proceed to see the whole collection, click the button below!
			</p>
			<Link className='bg-blue-500 rounded-lg p-2 mt-20' to='/guitars'>
				Go to collection
			</Link>
		</div>
	);
};

export default Home;
