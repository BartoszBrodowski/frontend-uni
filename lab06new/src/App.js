import { BrowserRouter, Route, Routes, useParams, useLocation } from 'react-router-dom';
import Collection from './components/Collection';
import CollectionItem from './components/CollectionItem';
import CollectionTypeItems from './components/CollectionTypeItems';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

function App() {
	const [collection, setCollection] = useState([
		{ id: uuidv4(), name: 'Fender Stratocaster', type: 'Stratocaster', color: 'Cream-white' },
		{ id: uuidv4(), name: 'Fender Telecaster', type: 'Telecaster', color: 'Red' },
	]);
	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route
						path='guitars'
						element={
							<Collection collection={collection} setCollection={setCollection} />
						}>
						<Route
							path=':type'
							element={<CollectionTypeItems collection={collection} />}></Route>
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
