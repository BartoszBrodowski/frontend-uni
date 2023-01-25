import Guitar from './Guitar';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import { addGuitar } from '../features/guitars/guitarsSlice';
import { useNavigate } from 'react-router-dom';

const GuitarList = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const guitars = useSelector((state) => state.guitars.value);

	const initialValues = {
		name: '',
		price: '',
		color: '',
		note: '',
	};

	const onSubmit = (values) => {
		const newGuitar = {
			id: uuidv4(),
			name: values.name,
			price: values.price,
			color: values.color,
			note: values.note,
		};
		dispatch(addGuitar(newGuitar));
	};
	return (
		<div className='flex flex-col justify-center items-center w-screen h-screen'>
			<ul className='flex flex-col gap-4 mb-4'>
				{guitars.map((guitar) => (
					<Guitar key={guitar.id} guitar={guitar} />
				))}
			</ul>
			<Formik initialValues={initialValues} validateOnChange={false} onSubmit={onSubmit}>
				<Form className='flex flex-col items-center w-[500px]'>
					<div className='text-red-500'>
						<ErrorMessage name='name' />
					</div>
					<Field
						className='border-2 border-orange-500 rounded p-2 mb-4 outline-none'
						type='text'
						id='name'
						name='name'
						placeholder='Name'
					/>
					<div className='text-red-500'>
						<ErrorMessage name='price' />
					</div>
					<Field
						className='border-2 border-orange-500 rounded p-2 mb-4 outline-none'
						type='text'
						id='price'
						name='price'
						placeholder='Price'
					/>
					<div className='text-red-500'>
						<ErrorMessage name='color' />
					</div>
					<Field
						className='border-2 border-orange-500 rounded p-2 mb-4 outline-none'
						type='text'
						id='color'
						name='color'
						placeholder='color'
					/>
					<div className='text-red-500'>
						<ErrorMessage name='note' />
					</div>
					<Field
						className='border-2 border-orange-500 rounded p-2 mb-4 outline-none'
						type='text'
						id='note'
						name='note'
						placeholder='note'
					/>
					<button className='login-register-button' type='submit'>
						Add Guitar
					</button>
					<button
						className='bg-gray-500 text-white p-1 rounded mt-4'
						onClick={() => navigate('/notes/list')}>
						See all notes
					</button>
				</Form>
			</Formik>
		</div>
	);
};

export default GuitarList;
