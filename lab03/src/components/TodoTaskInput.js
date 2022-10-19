import React from 'react';

const TodoTaskInput = (props) => {
	return (
		<input
			type='text'
			placeholder='To do'
			value={props.value}
			onChange={props.onTaskInput}
			required></input>
	);
};

export default TodoTaskInput;
