import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Collection from './components/Collection';
import CollectionItem from './components/CollectionItem';
import CollectionTypeItems from './components/CollectionTypeItems';
import Home from './components/Home';
import Notes from './components/Notes';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

function App() {
	const [collection, setCollection] = useState([
		{ id: uuidv4(), name: 'Fender Stratocaster', type: 'Stratocaster', color: 'Cream-white' },
		{ id: uuidv4(), name: 'Fender Telecaster', type: 'Telecaster', color: 'Red' },
	]);
	console.log(collection[0].id)
	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route
						path='guitars'
						element={
							<Collection collection={collection} setCollection={setCollection} />
						}
					/>
					<Route
						path='/guitars/:type'
						element={<CollectionTypeItems collection={collection} />}
					/>
					<Route path='/guitars/info/:id' element={<CollectionItem collection={collection} />} />
					<Route path='/guitars/notes/' element={<Notes collection={collection} />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
