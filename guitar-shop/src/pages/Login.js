import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

const Login = () => {
	const navigate = useNavigate();
	const initialValues = {
		email: '',
		password: '',
	};

	const validationSchema = Yup.object({
		email: Yup.string().email('Invalid email format').required('Provide an email'),
		password: Yup.string().required('Provide a password'),
	});

	const onSubmit = (values, {resetForm}) => {
		console.log('Form data', values);
		resetForm();
		navigate('/');
	};
	return (
		<div className='flex flex-col justify-center items-center w-screen h-screen'>
			<h1 className='text-3xl mb-4'>Login</h1>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				validateOnChange={false}
				onSubmit={onSubmit}
			>
				<Form className='flex flex-col items-center w-[500px]'>
					<Field
						className='border-2 border-orange-500 rounded p-2 mb-4 outline-none'
						type='email'
						id='email'
						name='email'
						placeholder='Enter your email'
					/>
					<div className='text-red-500'>
						<ErrorMessage name='email' />
					</div>
					<Field
						className='border-2 border-orange-500 rounded p-2 mb-4 outline-none'
						type='password'
						id='password'
						name='password'
						placeholder='Enter your password'
					/>
					<div className='text-red-500'>
						<ErrorMessage name='password' />
					</div>
					<button className='login-register-button' type='submit'>Log In</button>
				</Form>
			</Formik>
		</div>
	)
}

export default Login