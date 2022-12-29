import React from 'react';
import { useSelector } from 'react-redux';

const GuitarsList = () => {
	// const sortingFunctions = [
	// 	{ name: 'A-Z', func: (a, b) => a.name.localeCompare(b.name) },
	// 	{ name: 'Z-A', func: (a, b) => b.name.localeCompare(a.name) },
	// 	{ name: 'Price: Low to High', func: (a, b) => a.price - b.price },
	// 	{ name: 'Price: High to Low', func: (a, b) => b.price - a.price },
	// ];
	const guitarsList = useSelector((state) => state.guitarsList.value);
	return (
		<div className='flex flex-col items-center'>
			<ul>
				{guitarsList.map((guitar) => {
					return (
						<li key={guitar.id}>
							<div className='font-xl'>{guitar.name}</div>
							<div>{guitar.type}</div>
							<p className='text-grey'>{guitar.description}</p>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default GuitarsList;
