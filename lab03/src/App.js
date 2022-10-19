import { useState } from 'react';
import TodoList from './components/TodoList';
import DateInput from './components/DateInput';
import TodoTaskInput from './components/TodoTaskInput';
import './App.css';

function App() {
	const [date, setDate] = useState('');
	const [task, setTask] = useState('');
	const [todos, setTodos] = useState([]);

	const handleSubmit = (e) => {
		e.preventDefault();
		const todo = { todo: `${task}`, date: `${date}` };
		setTodos((prevTodos) => [...prevTodos, todo]);
		setDate('');
		setTask('');
	};

	const dateHandler = (e) => {
		const dateValue = e.target.value;
		console.log('test');
		setDate(dateValue);
	};

	const taskHandler = (e) => {
		const taskValue = e.target.value;
		console.log('task test');
		setTask(taskValue);
	};

	return (
		<div className='App'>
			<form onSubmit={handleSubmit}>
				<TodoTaskInput value={task} onTaskInput={taskHandler} />
				<DateInput value={date} onDateInput={dateHandler} />
				<TodoList todos={todos} />
				<button type='submit'>Add Todo</button>
			</form>
		</div>
	);
}

export default App;
