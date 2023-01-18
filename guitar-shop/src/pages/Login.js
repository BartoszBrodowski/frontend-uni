import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios, * as others from 'axios';
import { setCredentials, setShippingAddress } from '../features/userInfo/userInfoSlice';

const Login = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const initialValues = {
		email: '',
		password: '',
	};

	const validationSchema = Yup.object({
		email: Yup.string().email('Invalid email format').required('Provide an email'),
		password: Yup.string().required('Provide a password'),
	});

	const onSubmit = async (values, { resetForm }) => {
		try {
			await axios.post('http://localhost:8000/login', {
				email: values.email,
				password: values.password,
			});
			const { data } = await axios.get(`http://localhost:8000/login/${values.email}`);
			dispatch(
				setCredentials({
					username: data[0].username,
					firstName: data[0].firstName,
					lastName: data[0].lastName,
					email: data[0].email,
					isLoggedIn: data[0].isLoggedIn,
					wishlist: data[0].wishlist,
				})
			);
			dispatch(setShippingAddress(data[0].shippingAddress));
			navigate('/');
			resetForm();
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div className='flex flex-col justify-center items-center w-screen h-screen'>
			<h1 className='text-3xl mb-4'>Login</h1>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				validateOnChange={false}
				onSubmit={onSubmit}>
				<Form className='flex flex-col items-center w-[500px]'>
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
					<Link to='/register'>
						<div className='duration-200 text-orange-500 hover:cursor-pointer hover:text-white rounded p-1 hover:bg-orange-500'>
							Don't have an account? Register now.
						</div>
					</Link>
					<button className='login-register-button' type='submit'>
						Log In
					</button>
				</Form>
			</Formik>
		</div>
	);
};

export default Login;
