import React from 'react';
import Navbar from './Navbar';
import Weather from './components/Weather';
import Advices from './components/Advices';
import NoPage from './NoPage';
import Home from './Home';
import { Routes, Route, Navigate } from 'react-router-dom';
import NoteContainer from './NComponents/NoteContainer';

const App = () => {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Navigate to="/home" />} />

				<Route path="home" element={<Home />} />
				<Route path="noteslist" element={<NoteContainer />} />
				<Route path="weather" element={<Weather />} />
				<Route path="advices" element={<Advices />} />
				<Route path="*" element={<NoPage />} />
			</Routes>
		</>
	);
};

export default App;
