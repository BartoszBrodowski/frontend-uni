import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import GuitarElement from './GuitarElement';

const GuitarsList = () => {
	const navigate = useNavigate();
	const guitarsList = useSelector((state) => state.guitarsList.value);

	const showGuitarDetails = (id) => {
		navigate('/details/' + id.toString());
	};

	return (
		<div className='border-t-2 border-orange-500 pt-4'>
			<ul className='grid grid-cols-3 grid-rows-3'>
				{guitarsList.map((guitar, index) => {
					return (
						<li key={index}>
							<GuitarElement guitar={guitar} showGuitarDetails={showGuitarDetails} />
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default GuitarsList;
