import React from 'react';
import SearchResults from '../components/SearchResults/SearchResults';
import PagesList from '../features/guitarsList/PagesList';

const Home = () => {
	return (
		<div className='w-screen flex flex-col items-center gap-20 pb-8'>
			<SearchResults />
			<PagesList />
		</div>
	);
};

export default Home;
