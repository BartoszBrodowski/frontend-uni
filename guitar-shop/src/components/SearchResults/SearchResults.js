import GuitarsList from '../../features/guitarsList/GuitarsList';
import Filters from './Filters';

const SearchResults = () => {
	return (
		<div className='flex flex-col items-center w-[80%] shadow-card rounded-md mt-20'>
			<Filters />
			<GuitarsList />
		</div>
	);
};

export default SearchResults;
