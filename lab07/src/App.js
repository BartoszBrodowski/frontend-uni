import React from 'react';
import Guitars from './features/guitars/Guitars';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Notes from './components/Notes';

function App() {
	return (
		<div className='App flex justify-center items-center'>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/guitars' element={<Guitars />} />
					<Route path='/guitars/notes/:id' element={<Notes />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
