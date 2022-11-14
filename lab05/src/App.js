import './App.css';
import CommentForm from './components/CommentForm';
import CommentsList from './components/CommentsList';
import { useState, useEffect } from 'react';

function App() {
	const [commentsList, setCommentsList] = useState([]);
	useEffect(() => {
		const getData = async () => {
			const url = 'https://jsonplaceholder.typicode.com/comments';
			const response = await fetch(url);
			try {
				const data = await response.json();
				setCommentsList(data.slice(1, 10));
			} catch (err) {
				console.log(err);
			}
		};
		getData();
	}, []);

	const addCommentHandler = (value) => {
		setCommentsList((oldState) => [...oldState, value]);
	};
	return (
		<div className='App'>
			<CommentForm addComment={addCommentHandler} />
			<CommentsList commentsList={commentsList} />
		</div>
	);
}

export default App;
