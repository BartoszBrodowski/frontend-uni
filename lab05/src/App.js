import './App.css';
import CommentForm from './components/CommentForm';
import CommentsList from './components/CommentsList';

function App() {
	return (
		<div className='App'>
			<CommentForm />
			<CommentsList />
		</div>
	);
}

export default App;
