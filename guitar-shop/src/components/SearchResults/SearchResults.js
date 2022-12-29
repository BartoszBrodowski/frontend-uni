import GuitarsList from '../../features/guitarsList/GuitarsList';
import Filters from './Filters';

const SearchResults = () => {
	return (
		<div className='w-[40%] shadow-card rounded-md'>
			<Filters />
			<GuitarsList />
		</div>
	);
};

export default SearchResults;
