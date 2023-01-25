import { Formik, Form, ErrorMessage, Field } from 'formik';
import { editNote } from '../features/guitars/guitarsSlice';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

const NoteForm = () => {
	const dispatch = useDispatch();
	const { id } = useParams();
	const initialValues = {
		note: '',
	};
	const onSubmit = (values) => {
		dispatch(editNote({ id: id, note: values.note }));
		console.log(values.note);
	};

	return (
		<div className='flex flex-col justify-center items-center h-screen text-xl'>
			<h1 className='font-semibold'>Add/Edit Note</h1>
			<Formik initialValues={initialValues} validateOnChange={false} onSubmit={onSubmit}>
				<Form className='flex flex-col items-center w-[500px]'>
					<div className='text-red-500'>
						<ErrorMessage name='note' />
					</div>
					<Field
						className='border-2 border-orange-500 rounded p-2 mb-4 outline-none'
						type='text'
						id='note'
						name='note'
						placeholder='Update note'
					/>
					<button
						className='hover:cursor-pointer bg-orange-500 rounded-md p-2 text-white'
						type='submit'>
						Update Note
					</button>
				</Form>
			</Formik>
		</div>
	);
};

export default NoteForm;
