import { Formik, Form, ErrorMessage, Field } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { editGuitar } from '../features/guitars/guitarsSlice';
import { useParams } from 'react-router-dom';

const GuitarEdit = () => {
	const dispatch = useDispatch();
	const { id } = useParams();

	const initialValues = {
		name: '',
		price: '',
		color: '',
		note: '',
	};

	const onSubmit = (values) => {
		const newGuitar = {
			id: id,
			name: values.name,
			price: values.price,
			color: values.color,
			note: values.note,
		};
		dispatch(editGuitar(newGuitar));
	};
	return (
		<div className='flex flex-col justify-center items-center h-screen text-xl'>
			<h1>Edit Guitar</h1>
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
				</Form>
			</Formik>
		</div>
	);
};

export default GuitarEdit;
