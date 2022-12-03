import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addNote } from '../features/guitars/guitarsSlice';
import { useState } from 'react';

const Notes = () => {
	const [note, setNote] = useState('');
	const { id } = useParams();
	const dispatch = useDispatch();
	console.log(id);
	const guitars = useSelector((state) => state.guitars.value);
	const guitar = guitars.find((guitar) => guitar.id === id);

	const addNoteHandler = (note) => {
		dispatch(addNote(note));
	};

	const setNoteHandler = (e) => {
		setNote(e.target.value);
	};

	return (
		<div className='flex flex-col justify-center items-center h-screen w-screen'>
			<div>{guitar.name}</div>
			<div>{guitar.type}</div>
			<div>{guitar.color}</div>
			<h1 className='my-10'>Notes:</h1>
			<div>{guitar.note}</div>
			<div className='flex flex-col items-center gap-4 mt-10'>
				<h1>Add note</h1>
				<input
					className='h-60 w-96 outline outline-1'
					type='text'
					placeholder='Write the note here...'
					onChange={setNoteHandler}
				/>
				<button
					className='bg-blue-500 rounded-lg p-2'
					type='button'
					onClick={() => addNoteHandler(note)}>
					Add note
				</button>
			</div>
		</div>
	);
};

export default Notes;
