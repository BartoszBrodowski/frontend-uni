import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './CommentForm.css';

const CommentForm = ({ addComment }) => {
	const [nameError, setNameError] = useState(false);
	const [emailError, setEmailError] = useState(false);

	const showErrorsHandler = () => {
		if (formik.errors.name) {
			setNameError(true);
		} else {
			setNameError(false);
		}
		if (formik.errors.email) {
			setEmailError(true);
		} else {
			setEmailError(false);
		}
	};

	const resetValuesHandler = () => {
		formik.resetForm();
	};

	const formik = useFormik({
		initialValues: {
			name: '',
			email: '',
			body: '',
		},
		validationSchema: Yup.object({
			name: Yup.string()
				.min(2, 'Must be at least 2 characters')
				.max(19, 'Must be less than 20 characters!')
				.required('Name required'),
			email: Yup.string().email('Invalid email adress').required('Email required'),
			body: Yup.string().optional(),
		}),
		onSubmit: (values) => {
			values['id'] = Math.floor(Math.random() * 10000);
			values['userId'] = Math.floor(Math.random() * 10000);
			console.log(values);
			fetch('https://jsonplaceholder.typicode.com/comments', {
				method: 'POST',
				body: JSON.stringify(values),
				headers: {
					'Content-type': 'application/json; charset=UTF-8',
				},
			}).then((res) => {
				formik.resetForm();
				addComment(values);
			});
		},
	});
	return (
		<form className='form' onSubmit={formik.handleSubmit}>
			<div className='form-container'>
				<div className='form-input-container'>
					<input
						name='name'
						type='text'
						placeholder='Name'
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.name}
					/>
					{nameError && formik.errors.name ? (
						<p className='error-message'>{formik.errors.name}</p>
					) : null}
				</div>
				<div className='form-input-container'>
					<input
						name='email'
						type='email'
						placeholder='Email'
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.email}
					/>
					{emailError && formik.errors.email ? (
						<p className='error-message'>{formik.errors.email}</p>
					) : null}
				</div>
				<div className='form-input-container'>
					<input
						name='body'
						type='textarea'
						placeholder='Text'
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.body}
					/>
				</div>
			</div>
			<button onClick={showErrorsHandler} className='submit-button' type='submit'>
				Submit
			</button>
			<button onClick={resetValuesHandler} type='button'>
				Reset
			</button>
		</form>
	);
};

export default CommentForm;
