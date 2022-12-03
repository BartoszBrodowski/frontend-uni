import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addGuitar, deleteGuitar } from './guitarsSlice';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';

const Guitars = () => {
	const guitars = useSelector((state) => state.guitars.value);
	const dispatch = useDispatch();

	const [name, setName] = useState('');
	const [type, setType] = useState('');
	const [color, setColor] = useState('');

	const setNameHandler = (e) => {
		setName(e.target.value);
	};
	const setTypeHandler = (e) => {
		setType(e.target.value);
	};
	const setColorHandler = (e) => {
		setColor(e.target.value);
	};

	const deleteGuitarHandler = (id) => {
		dispatch(deleteGuitar(id));
	};

	return (
		<div className='flex justify-center items-center w-screen'>
			<div className='flex flex-col justify-center items-center w-full'>
				<h1 className='text-5xl font-semibold my-20'>Guitars</h1>
				<ul className='grid grid-cols-3 justify-center items-center gap-10 w-full'>
					{guitars.map((guitar, index) => {
						const guitarNotesLink = `/guitars/notes/${guitar.id}`;
						return (
							<li className='flex flex-col justify-center items-center' key={index}>
								<div>Id: {guitar.id}</div>
								<div>Name: {guitar.name}</div>
								<div>Type: {guitar.type}</div>
								<div>Color: {guitar.color}</div>
								<button
									className='bg-slate-300 rounded-lg px-2 my-2'
									type='button'
									onClick={() => deleteGuitarHandler(guitar.id)}>
									Delete
								</button>
								<Link className='bg-slate-300 rounded-lg px-2' to={guitarNotesLink}>
									Notes
								</Link>
							</li>
						);
					})}
				</ul>
				<form className='flex flex-col justify-center items-center gap-4 my-20'>
					<span>Add Guitar:</span>
					<input
						type='text'
						placeholder='Name'
						className='outline outline-slate-300 outline-2 focus:outline-blue-600 pl-2'
						onChange={setNameHandler}
					/>
					<input
						type='text'
						placeholder='Type'
						className='outline outline-slate-300 outline-2 focus:outline-blue-600 pl-2'
						onChange={setTypeHandler}
					/>
					<input
						type='text'
						placeholder='Color'
						className='outline outline-slate-300 outline-2 focus:outline-blue-600 pl-2'
						onChange={setColorHandler}
					/>
					<button
						className='bg-blue-500 rounded-lg p-2'
						type='button'
						onClick={() =>
							dispatch(
								addGuitar({ id: uuidv4(), name: name, type: type, color: color })
							)
						}>
						Add guitar
					</button>
				</form>
			</div>
		</div>
	);
};

export default Guitars;
