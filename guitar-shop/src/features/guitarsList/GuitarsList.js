import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const GuitarsList = () => {
	const navigate = useNavigate();
	const guitarsList = useSelector((state) => state.guitarsList.value);

	const showGuitarDetails = (id) => {
		navigate('/details/' + id.toString());
	};

	return (
		<div className='border-t-2 border-orange-500 pt-4'>
			<ul className='grid grid-cols-3 grid-rows-3'>
				{guitarsList.map((guitar) => {
					return (
						<li
							className='flex flex-col items-center hover:cursor-pointer'
							key={guitar.id}
							onClick={() => showGuitarDetails(guitar.id)}
						>
							<img
								src={require('../../images/' + guitar.image)}
								alt='Guitar'
							/>
							<div className='font-xl'>{guitar.name}</div>
							<p className='text-grey text-green-500'>
								${guitar.price}
							</p>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default GuitarsList;
