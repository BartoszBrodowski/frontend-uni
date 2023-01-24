import StringsFilters from '../components/SearchResults/StringsFilters';
import StringsList from '../features/stringsList/StringsList';

const Strings = () => {
	return (
		<div className='flex justify-center w-full'>
			<div className='flex flex-col items-center w-full mt-28 rounded-md shadow-card w-[70%]'>
				<StringsFilters />
				<StringsList />
			</div>
		</div>
	);
};

export default Strings;
