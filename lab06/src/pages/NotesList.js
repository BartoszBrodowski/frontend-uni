import { useSelector } from 'react-redux';

const NotesList = () => {
	const guitars = useSelector((state) => state.guitars.value);
	const notes = guitars.map((guitar) => guitar.note);

	return (
		<div className='flex flex-col justify-center items-center h-screen text-xl'>
			<h1 className='font-bold mb-12'>Notes List</h1>
			<ul className='flex flex-col items-center gap-4 mb-4'>
				{notes.map((note, index) => (
					<li key={index}>
						Note {index}: {note}
					</li>
				))}
			</ul>
		</div>
	);
};

export default NotesList;
