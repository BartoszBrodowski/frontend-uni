import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const NoteDetails = () => {
	const { id } = useParams();
	const guitar = useSelector((state) => state.guitars.value.find((guitar) => guitar.id === id));
	return (
		<div className='flex flex-col justify-center items-center h-screen text-xl'>
			<h1>Note Details</h1>
			<p>ID: {id}</p>
			<div className='mt-8'>{guitar.note}</div>
		</div>
	);
};

export default NoteDetails;
