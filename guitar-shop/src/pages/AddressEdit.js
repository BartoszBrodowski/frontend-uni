import { useSelector, useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios, * as others from 'axios';
import { useNavigate } from 'react-router-dom';
import { setShippingAddress } from '../features/userInfo/userInfoSlice';

const AddressEdit = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { username, email, shippingAddress } = useSelector((state) => state.userInfo.user);
	const phoneRegExp =
		/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
	const postalCodeRegExp = /^[0-9]{2}-[0-9]{3}$/;
	const initialValues = {
		city: shippingAddress.city,
		street: shippingAddress.street,
		buildingFlat: shippingAddress.buildingFlat,
		postalCode: shippingAddress.postalCode,
		phoneNumber: shippingAddress.phoneNumber,
	};

	const validationSchema = Yup.object({
		city: Yup.string(),
		street: Yup.string(),
		buildingFlat: Yup.string(),
		postalCode: Yup.string().matches(postalCodeRegExp, 'Postal code is not valid'),
		phoneNumber: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
	});

	const onSubmit = async (values, { resetForm }) => {
		try {
			await axios.put('http://localhost:8000/changeShippingAddress', {
				email: email,
				shippingAddress: values,
			});
			dispatch(setShippingAddress(values));
			navigate(`/user-profile/${username}`);
			resetForm();
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div className='flex flex-col items-center justify-center h-screen gap-2'>
			<h1>Edit address</h1>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				validateOnChange={false}
				onSubmit={onSubmit}>
				<Form className='flex flex-col items-center gap-2'>
					<div className='text-red-500'>
						<ErrorMessage name='city' />
					</div>
					<Field
						className='outline-none border-2 border-orange-500 rounded p-2'
						type='text'
						id='city'
						name='city'
						placeholder='City'
					/>
					<div className='text-red-500'>
						<ErrorMessage name='street' />
					</div>
					<Field
						className='outline-none border-2 border-orange-500 rounded p-2'
						type='text'
						id='street'
						name='street'
						placeholder='Street'
					/>
					<div className='text-red-500'>
						<ErrorMessage name='buildingFlat' />
					</div>
					<Field
						className='outline-none border-2 border-orange-500 rounded p-2'
						type='text'
						id='buildingFlat'
						name='buildingFlat'
						placeholder='Building/Flat'
					/>
					<div className='text-red-500'>
						<ErrorMessage name='postalCode' />
					</div>
					<Field
						className='outline-none border-2 border-orange-500 rounded p-2'
						type='text'
						id='postalCode'
						name='postalCode'
						placeholder='Postal code'
					/>
					<div className='text-red-500'>
						<ErrorMessage name='phoneNumber' />
					</div>
					<Field
						className='outline-none border-2 border-orange-500 rounded p-2'
						type='text'
						id='phoneNumber'
						name='phoneNumber'
						placeholder='Phone number'
					/>
					<button className='orange-button' type='submit'>
						Submit
					</button>
				</Form>
			</Formik>
		</div>
	);
};

export default AddressEdit;
