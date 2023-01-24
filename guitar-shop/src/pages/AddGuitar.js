import { ErrorMessage, Field, Formik, Form } from 'formik';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import * as Yup from 'yup';
import { addToList } from '../features/guitarsList/guitarsListSlice';

const AddGuitar = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const initialValues = {
		id: uuidv4(),
		name: '',
		type: '',
		color: '',
		description: '',
		price: '',
		category: '',
		releaseDate: '',
		stringsId: '',
	};

	const validationSchema = Yup.object({
		name: Yup.string().required('Required'),
		type: Yup.string().required('Required'),
		color: Yup.string().required('Required'),
		description: Yup.string().required('Required'),
		price: Yup.number().required('Required'),
		category: Yup.string().required('Required'),
		releaseDate: Yup.number().required('Required'),
	});

	const onSubmit = async (values, { resetForm }) => {
		try {
			const guitarObject = {
				id: uuidv4(),
				name: values.name,
				type: values.type,
				color: values.color,
				description: values.description,
				price: parseInt(values.price),
				image: 'fender-squier-bullet-telecaster-lrl-blk.jpg',
				category: values.category,
				// Date jako integer
				releaseDate: parseInt(values.releaseDate),
				stringsId: values.stringsId
					? values.stringsId
					: '2cc14971-d42a-440e-b056-0239878d9d06',
			};
			console.log(guitarObject);
			dispatch(addToList(guitarObject));
			navigate('/');
			resetForm();
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className='flex flex-col items-center justify-center h-screen gap-2'>
			<h1 className='font-bold text-2xl'>Add guitar to list</h1>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				validateOnChange={false}
				onSubmit={onSubmit}>
				<Form className='flex flex-col items-center gap-2'>
					<div className='text-red-500'>
						<ErrorMessage name='name' />
					</div>
					<Field
						className='outline-none border-2 border-orange-500 rounded p-2'
						type='text'
						id='name'
						name='name'
						placeholder='name'
					/>
					<div className='text-red-500'>
						<ErrorMessage name='type' />
					</div>
					<Field
						className='outline-none border-2 border-orange-500 rounded p-2'
						type='text'
						id='type'
						name='type'
						placeholder='type'
					/>
					<div className='text-red-500'>
						<ErrorMessage name='color' />
					</div>
					<Field
						className='outline-none border-2 border-orange-500 rounded p-2'
						type='text'
						id='color'
						name='color'
						placeholder='color'
					/>
					<div className='text-red-500'>
						<ErrorMessage name='description' />
					</div>
					<Field
						className='outline-none border-2 border-orange-500 rounded p-2'
						type='text'
						id='description'
						name='description'
						placeholder='description'
					/>
					<div className='text-red-500'>
						<ErrorMessage name='price' />
					</div>
					<Field
						className='outline-none border-2 border-orange-500 rounded p-2'
						type='text'
						id='price'
						name='price'
						placeholder='price'
					/>
					<div className='text-red-500'>
						<ErrorMessage name='image' />
					</div>
					<Field
						className='outline-none border-2 border-orange-500 rounded p-2'
						type='text'
						id='image'
						name='image'
						placeholder='image'
					/>
					<div className='text-red-500'>
						<ErrorMessage name='category' />
					</div>
					<Field
						className='outline-none border-2 border-orange-500 rounded p-2'
						type='text'
						id='category'
						name='category'
						placeholder='category'
					/>
					<div className='text-red-500'>
						<ErrorMessage name='releaseDate' />
					</div>
					<Field
						className='outline-none border-2 border-orange-500 rounded p-2'
						type='text'
						id='releaseDate'
						name='releaseDate'
						placeholder='releaseDate'
					/>
					<div className='text-red-500'>
						<ErrorMessage name='stringsId' />
					</div>
					<Field
						className='outline-none border-2 border-orange-500 rounded p-2'
						type='text'
						id='stringsId'
						name='stringsId'
						placeholder='stringsId'
					/>
					<button className='orange-button' type='submit'>
						Submit
					</button>
				</Form>
			</Formik>
		</div>
	);
};

export default AddGuitar;
