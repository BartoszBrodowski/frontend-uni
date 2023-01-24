import React from 'react';
import { useSelector } from 'react-redux';
import StringsElement from './StringsElement';
import { regexSearch } from './stringsListSlice';

const StringsList = () => {
	const searchValue = useSelector((state) => state.stringsList.searchValue);
	const stringsListSearchFiltered = useSelector((state) => regexSearch(state, searchValue));
	return (
		<div className='border-t-2 border-orange-500 pt-4 flex flex-col items-center w-full'>
			<ul className='grid grid-cols-3 grid-rows-3 gap-8'>
				{stringsListSearchFiltered.map((strings) => (
					<li key={strings.id}>
						<StringsElement strings={strings} />
					</li>
				))}
			</ul>
		</div>
	);
};

export default StringsList;
