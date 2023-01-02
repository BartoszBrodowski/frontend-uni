import { Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Home from './pages/Home';
import GuitarDetails from './pages/GuitarDetails';
import Navbar from './components/Navbar';
import Register from './pages/Register';
import Login from './pages/Login';
import ShoppingCart from './pages/ShoppingCart';
import UserProfile from './pages/UserProfile';

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
		<div>
				{showNavbar && <Navbar />}
				<Routes >
					<Route path='/' element={<Home />} />
					<Route path='/register' element={<Register />} />
					<Route path='/login' element={<Login />} />
					<Route path='/details/:id' element={<GuitarDetails />} />
					<Route path='/shopping-cart' element={<ShoppingCart />} />
					<Route path='/user-profile/:username' element={<UserProfile />}/>
				</Routes>
		</div>
	);
}

export default App;
