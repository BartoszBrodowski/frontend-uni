import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const EditGuitar = () => {
	const [name, setName] = useState('');
	const [color, setColor] = useState('');
	const [type, setType] = useState('');

	const { id } = useParams();
	const dispatch = useDispatch();

	const editGuitarHandler = (values) => {
		dispatch(EditGuitar({ id: id, ...values }));
	};

	const editGuitar = () => {
		dispatch(editGuitarHandler({ id: id, name: name, color: color, type: type }));
	};
	return (
		// Create formik form to edit guitar object based on id
		<div className='flex flex-col justify-center items-center w-screen mt-40'>
			<div className='flex flex-col justify-center items-center gap-4'>
				<h1 className='text-5xl font-bold my-4'>Edit guitar</h1>
				<p className='text-xl'>This is a form to edit guitar object.</p>
				<p className='text-xl'>If you wont to proceed, click the button below!</p>
			</div>
			<div className='flex flex-col gap-4 mt-8'>
				<div className='border-2 border-black rounded-lg p-2'>
					<input
						type='text'
						placeholder='name'
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<div className='border-2 border-black rounded-lg p-2'>
					<input
						type='text'
						placeholder='type'
						onChange={(e) => setType(e.target.value)}
					/>
				</div>
				<div className='border-2 border-black rounded-lg p-2'>
					<input
						type='text'
						placeholder='color'
						onChange={(e) => setColor(e.target.value)}
					/>
				</div>
				<button onClick={() => editGuitar()}>Edit Guitar</button>
			</div>
		</div>
	);
};

export default EditGuitar;
