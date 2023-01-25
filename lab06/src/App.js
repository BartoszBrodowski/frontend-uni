import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GuitarDetails from './pages/GuitarDetails';
import GuitarList from './pages/GuitarList';
import GuitarEdit from './pages/GuitarEdit';
import NoteDetails from './pages/NoteDetails';
import NoteForm from './pages/NoteForm';
import NotesList from './pages/NotesList';

const App = () => {
	return (
		<div className='h-screen'>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<GuitarList />} />
					<Route path='/guitars/:id' element={<GuitarDetails />} />
					<Route path='/guitars/edit/:id' element={<GuitarEdit />} />
					<Route path='/notes/:id' element={<NoteDetails />} />
					<Route path='/notes/edit/:id' element={<NoteForm />} />
					<Route path='/notes/list' element={<NotesList />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
