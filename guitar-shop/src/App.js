import Home from './pages/Home';
import GuitarDetails from './pages/GuitarDetails';
import Navbar from './components/Navbar';
import Register from './pages/Register';
import { Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

function App() {
	const [showNavbar, setShowNavbar] = useState(false);
	const location = useLocation();
	useEffect(() => {
		if (location.pathname === '/register' || location.pathname === '/login') {
			setShowNavbar(false);
		} else {
			setShowNavbar(true);
		}
	}, [location])
	return (
		<div className='App'>
				{showNavbar && <Navbar />}
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/register' element={<Register />} />
					<Route path='/details/:id' element={<GuitarDetails />} />
				</Routes>
		</div>
	);
}

export default App;
