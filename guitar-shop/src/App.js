import Home from './pages/Home';
import GuitarDetails from './pages/GuitarDetails';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
	return (
		<div className='App'>
			<Navbar />
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/details/:id' element={<GuitarDetails />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
