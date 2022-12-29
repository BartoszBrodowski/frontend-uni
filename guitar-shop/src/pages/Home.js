import React from 'react';
import Navbar from '../components/Navbar';
import SearchResults from '../components/SearchResults/SearchResults';

const Home = () => {
	return (
		<div className='w-screen flex flex-col items-center gap-20'>
			<Navbar />
			<SearchResults />
		</div>
	);
};

export default Home;
