import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

const StringsDetails = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const stringsList = useSelector((state) => state.stringsList.value);
	const strings = stringsList.find((item) => item.id === id);
	return (
		<div className='flex justify-center items-center w-screen h-screen'>
			<button className='absolute left-4 top-20 font-semibold' onClick={() => navigate(-1)}>
				{'<<< Go Back'}
			</button>
			<div className='flex flex-col gap-8 w-1/2'>
				<img
					className='w-[400px]'
					onClick={null}
					src={require('../images/' + strings.image)}
					alt='Strings'
				/>
				<div className='text-4xl'>Name: {strings.name}</div>
				<div className='text-lg'>Description: {strings.description}</div>
			</div>
		</div>
	);
};

export default StringsDetails;
