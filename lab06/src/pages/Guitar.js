import { useNavigate } from 'react-router-dom';
import { deleteGuitar } from '../features/guitars/guitarsSlice';
import { useDispatch } from 'react-redux';
import { deleteNote } from '../features/guitars/guitarsSlice';

const Guitar = ({ guitar }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const deleteNoteHandler = () => {
		dispatch(deleteNote(guitar.id));
	};
	return (
		<div className='shadow-md p-4 rounded text-2xl hover:bg-gray-200'>
			<h1>Guitar {guitar.id}</h1>
			<p className='font-bold'>{guitar.name}</p>
			<p>{guitar.price}</p>
			<p>{guitar.color}</p>
			<p>{guitar.note}</p>
			<button
				className='hover:cursor-pointer bg-orange-500 p-1 mr-2 rounded'
				onClick={() => navigate(`/guitars/${guitar.id}`)}>
				See Details
			</button>
			<button
				className='bg-orange-500 mr-2 p-1 rounded'
				onClick={() => navigate(`/guitars/edit/${guitar.id}`)}>
				Edit
			</button>
			<button
				className='bg-red-500 rounded p-1'
				onClick={() => dispatch(deleteGuitar(guitar.id))}>
				Delete
			</button>
			<button
				className='bg-blue-500 rounded p-1 ml-2'
				onClick={() => navigate(`/notes/${guitar.id}`)}>
				Note Details
			</button>
			<button
				className='bg-blue-500 rounded p-1 ml-2'
				onClick={() => navigate(`/notes/edit/${guitar.id}`)}>
				Notes Form
			</button>
			<button className='bg-blue-500 rounded p-1 ml-2' onClick={deleteNoteHandler}>
				Delete Note
			</button>
		</div>
	);
};

export default Guitar;
