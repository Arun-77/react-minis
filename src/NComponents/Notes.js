import React, { useState } from 'react';
import './Notes.css';

const wordDay = ['Sun', 'Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat'];
const wordMonth = [
	'Jan',
	'Feb',
	'Mar',
	'Apr',
	'May',
	'Jun',
	'Jul',
	'Aug',
	'Sep',
	'Oct',
	'Nov',
	'Dec',
];

const Notes = ({ id, title, text, updatedate, deleteHandler }) => {
	const dateHandler = () => {
		const day = wordDay[updatedate.getDay()];
		const dates = updatedate.getDate();
		const month = wordMonth[updatedate.getMonth()];
		const year = updatedate.getFullYear();
		const second = updatedate.getSeconds();
		const minute = updatedate.getMinutes();
		const hour = updatedate.getHours();

		return `${hour > 12 ? hour - 12 : hour}:${minute}:${second} ${
			hour >= 12 ? 'PM' : 'AM'
		} ${day}, ${dates} ${month} ${year}`;
	};

	return (
		<div className="card note">
			<div className="card-body">
				<div className="d-flex justify-content-between">
					<h5 className="card-title">{title}</h5>

					<div className="encloser h-100">
						<button
							type="botton"
							className="btn-fav"
							onClick={() => deleteHandler(id)}
						>
							Trash
						</button>
						<button
							type="button"
							className="btn-fav mx-2"
							onClick={() => console.log('you clicked star')}
						>
							Star
						</button>
					</div>
				</div>
				<p className="card-text">{text}</p>
			</div>
			<div className="card-footer text-muted d-flex justify-content-end">
				<small>{dateHandler()}</small>
			</div>
		</div>
	);
};

export default Notes;
