import React from 'react';
import Notes from './Notes';
import './NotesList.css';

const NotesList = ({ notes, deleteHandler }) => {
	return (
		<section className="notes-sec container">
			<div className="row justify-content-center mx-auto w-100">
				{notes.map((note) => (
					<Notes
						key={note.id}
						className=" col col-sm-6 col-md-4 col-lg-3"
						{...note}
						deleteHandler={deleteHandler}
					/>
				))}
			</div>
		</section>
	);
};

export default NotesList;
