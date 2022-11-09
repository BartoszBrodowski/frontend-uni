import { useState } from 'react';
import { useFormik } from 'formik';

const CommentForm = () => {
	const formik = useFormik({
		initialValues: {
			name: '',
			email: '',
			body: '',
		},
		onSubmit: (values) => {
			console.log(values);
		},
	});
	return (
		<form onSubmit={formik.handleSubmit}>
			<div>
				<input
					name='name'
					type='text'
					placeholder='Name'
					onChange={formik.handleChange}
					value={formik.values.name}
				/>
				<input
					name='email'
					type='email'
					placeholder='Email'
					onChange={formik.handleChange}
					value={formik.values.email}
				/>
				<input
					name='body'
					type='textarea'
					placeholder='Text'
					onChange={formik.handleChange}
					value={formik.values.body}
				/>
			</div>
			<button type='submit'>Submit</button>
		</form>
	);
};

export default CommentForm;
