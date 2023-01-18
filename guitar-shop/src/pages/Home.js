import React from 'react';
import SearchResults from '../components/SearchResults/SearchResults';

const Home = () => {
	return (
		<div className='w-screen flex flex-col items-center gap-20 pb-8'>
			<SearchResults />
		</div>
	);
};

export default Home;
