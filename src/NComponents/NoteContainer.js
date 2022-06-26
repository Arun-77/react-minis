import { nanoid } from 'nanoid';
import React, { useEffect, useState } from 'react';
import InputModal from './InputModal';
import NotesList from './NotesList';

const Note = [
	{
		id: nanoid(),
		title: 'First',
		text: 'This is my first Note',
		updatedate: new Date(2022, 3, 21, 21, 11, 22),
	},
	{
		id: nanoid(),
		title: 'Second',
		text: 'This is my second Note',
		updatedate: new Date(2022, 2, 22, 12, 25, 35),
	},
	{
		id: nanoid(),
		title: 'Third',
		text: 'This is my third Note',
		updatedate: new Date(2022, 1, 15, 19, 35, 15),
	},
	{
		id: nanoid(),
		title: 'Fourth',
		text: 'This is my fourth Note',
		updatedate: new Date(2021, 11, 19, 3, 56, 44),
	},
];

const NoteContainer = () => {
	const [notes, setNotes] = useState(Note);
	const [darkMode, setDarkMode] = useState(false);
	const [stext, setStext] = useState('');

	/*
	 *input handler
	 */
	const inputnotesHandler = (obj) => {
		setNotes([obj, ...notes]);
	};

	/*
	 *delete handler
	 */
	const deleteHandler = (id) => {
		setNotes(notes.filter((note) => note.id !== id));
	};
	/*
	 *submit handler
	 */
	const searchHandler = (e) => {
		setStext(e.target.value);
	};

	// single property search
	// const searched = notes.filter((note) =>
	// 	note.title.toLowerCase().includes(stext.trim().toLowerCase())
	// );

	//  multi- property search
	const searched = notes.filter((note) =>
		Object.keys(note).some((key) =>
			note[key].toLowerCase().toString().includes(stext.trim().toLowerCase())
		)
	);

	useEffect(() => {
		const body = document.body;
		const toggle = document.querySelector('.toggle-inner');

		if (darkMode === true) {
			body.classList.add('dark-mode');
			toggle.classList.add('toggle-active');
		} else {
			body.classList.remove('dark-mode');
			toggle.classList.remove('toggle-active');
		}
	}, [darkMode]);

	return (
		<main>
			<section
				className="container d-flex flex-column flex-sm-row justify-content-between"
				style={{ paddingTop: '80px' }}
			>
				<h1 className="notes-title">Notes</h1>
				<div className="d-flex align-items-center">
					<div
						id="toggle"
						onClick={() =>
							darkMode === false ? setDarkMode(true) : setDarkMode(false)
						}
					>
						<div className="toggle-inner" />
					</div>
					<InputModal inputnotesHandler={inputnotesHandler} />
					<input type="text" placeholder="Search.." onChange={searchHandler} />
				</div>
			</section>

			{notes.length === 0 ? (
				<div className="text-center pt-5">
					<h1 className="notes-title">This place seems quite here.</h1>
					<h1 className="notes-title">Try adding something!</h1>
				</div>
			) : (
				<NotesList notes={searched} deleteHandler={deleteHandler} />
			)}
		</main>
	);
};

export default NoteContainer;
