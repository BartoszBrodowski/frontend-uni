import React from 'react';

const Navbar = () => {
	return (
		<nav className='flex items-center justify-center bg-orange-500 h-12 w-screen p-4 py-8'>
			<div className='text-white absolute left-4 text-3xl font-bold hover:cursor-pointer'>
				Guitar shop
			</div>
			<input
				className='placeholder:text-grey-500 bg-white rounded-full h-8 w-1/4 pl-4 focus:outline-none'
				type='text'
				placeholder='Search'
			/>
		</nav>
	);
};

export default Navbar;
