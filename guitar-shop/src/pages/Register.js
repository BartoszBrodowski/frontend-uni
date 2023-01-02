import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios, * as others from 'axios';

const Register = () => {
	const navigate = useNavigate();
	const initialValues = {
		username: '',
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		confirmPassword: '',
	};

	const validationSchema = Yup.object({
		username: Yup.string().required('Required'),
		firstName: Yup.string().required('Required'),
		lastName: Yup.string().required('Required'),
		email: Yup.string().email('Invalid email format').required('Required'),
		password: Yup.string().required('Required'),
		confirmPassword: Yup.string()
			.oneOf([Yup.ref('password'), ''], 'Passwords must match')
			.required('Required'),
	});

	const onSubmit = async (values, {resetForm}) => {
		try {
			await axios.post('http://localhost:8000/register', { username: values.username, firstName: values.firstName, lastName: values.lastName, email: values.email, password: values.password})
			navigate('/login');
			resetForm();
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className='flex flex-col justify-center items-center w-screen h-screen'>
			<h1 className='text-3xl mb-4'>Register</h1>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				validateOnChange={false}
				onSubmit={onSubmit}
				>
				<Form className='flex flex-col items-center w-[500px]'>
					<div className='text-red-500'>
						<ErrorMessage name='username' />
					</div>
					<Field
						className='border-2 border-orange-500 rounded p-2 mb-4 outline-none'
						type='text'
						id='username'
						name='username'
						placeholder='Enter your username'
					/>
					
					<div className='text-red-500'>
						<ErrorMessage name='username' />
					</div>
					<Field
						className='border-2 border-orange-500 rounded p-2 mb-4 outline-none'
						type='text'
						id='firstName'
						name='firstName'
						placeholder='Enter your first name'
					/>
					<div className='text-red-500'>
						<ErrorMessage name='lastName' />
					</div>
					<Field
						className='border-2 border-orange-500 rounded p-2 mb-4 outline-none'
						type='text'
						id='lastName'
						name='lastName'
						placeholder='Enter your last name'
					/>
					<div className='text-red-500'>
						<ErrorMessage name='email' />
					</div>
					<Field
						className='border-2 border-orange-500 rounded p-2 mb-4 outline-none'
						type='email'
						id='email'
						name='email'
						placeholder='Enter your email'
					/>
					<div className='text-red-500'>
						<ErrorMessage name='password' />
					</div>
					<Field
						className='border-2 border-orange-500 rounded p-2 mb-4 outline-none'
						type='password'
						id='password'
						name='password'
						placeholder='Enter your password'
					/>
					<div className='text-red-500'>
						<ErrorMessage name='confirmPassword' />
					</div>
					<Field
						className='border-2 border-orange-500 rounded p-2 mb-4 outline-none'
						type='password'
						id='confirmPassword'
						name='confirmPassword'
						placeholder='Confirm your password'
					/>
					<Link to='/login'>
						<div className='duration-200 text-orange-500 hover:cursor-pointer hover:text-white rounded p-1 hover:bg-orange-500'>Already have an account? Log in</div>
					</Link>
					<button className='login-register-button' type='submit'>Submit</button>
				</Form>
			</Formik>
		</div>
	);
};

export default Register;
