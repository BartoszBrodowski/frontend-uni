import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const GuitarDetails = () => {
	const { id } = useParams();
	const guitar = useSelector((state) => state.guitars.value.find((guitar) => guitar.id === id));
	return (
		<div className='flex flex-col justify-center items-center h-screen text-xl'>
			<h1>Guitar Details</h1>
			<p>ID: {id}</p>
			<div className='text-orange-500'>Name: {guitar.name}</div>
			<div className='text-green-500'>Price: {guitar.price}</div>
			<div>Color: {guitar.color}</div>
		</div>
	);
};

export default GuitarDetails;
