import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
	return (
		<div className='home-container'>
			<div>Welcome to Guitar collection!</div>
			<div>
				<Link to='/guitars'>Go to collection</Link>
			</div>
		</div>
	);
};

export default Home;
