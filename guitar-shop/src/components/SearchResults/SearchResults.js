import GuitarsList from '../../features/guitarsList/GuitarsList';
import GuitarsFilters from './GuitarsFilters';

const SearchResults = () => {
	return (
		<div className='flex flex-col items-center w-[70%] shadow-card rounded-md mt-28'>
			<GuitarsFilters />
			<GuitarsList />
		</div>
	);
};

export default SearchResults;
