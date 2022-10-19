import React from 'react';

const DateInput = (props) => {
	const todaysDate = new Date().toJSON().slice(0, 10);
	return (
		<div>
			<input
				type='date'
				onChange={props.onDateInput}
				value={props.value}
				min={todaysDate}
				required></input>
		</div>
	);
};

export default DateInput;
