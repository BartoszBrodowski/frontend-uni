import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const Address = ({ address }) => {
	const { shippingAddress } = useSelector((state) => state.userInfo.user);

	return (
		<div className='flex flex-col items-center'>
			<h1>Shipping address:</h1>
			<div className='flex items-center gap-2 w-full justify-between'>
				<div className='text-slate-400'>City: </div>
				<div className='font-semibold'>{address.city}</div>
			</div>
			<div className='flex items-center gap-2 w-full justify-between'>
				<div className='text-slate-400'>Street: </div>
				<div className='font-semibold'>{address.street}</div>
			</div>
			<div className='flex items-center gap-2 w-full justify-between'>
				<div className='text-slate-400'>Building/Flat: </div>
				<div className='font-semibold'>{address.buildingFlat}</div>
			</div>
			<div className='flex items-center gap-2 w-full justify-between'>
				<div className='text-slate-400'>Postal code: </div>
				<div className='font-semibold'>{address.postalCode}</div>
			</div>
			<div className='flex items-center gap-2 w-full justify-between'>
				<div className='text-slate-400'>Phone number: </div>
				<div className='font-semibold'>{address.phoneNumber}</div>
			</div>
		</div>
	);
};

export default Address;
