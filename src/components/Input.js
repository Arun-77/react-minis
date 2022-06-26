import React from 'react';
import { FaSearch } from 'react-icons/fa';

const Input = ({ query, setQuery, fetchData }) => {
	const inputHandler = (e) => {
		setQuery(e.target.value);
	};

	const submitHandler = (e) => {
		e.preventDefault();

		fetchData();
		setQuery('');
	};

	return (
		<form className="mb-4" onSubmit={submitHandler}>
			<input
				placeholder="Search..."
				value={query}
				onChange={inputHandler}
				className="pb-2 px-1"
			/>
			<button type="submit" className="btn btn-primary">
				<FaSearch />
			</button>
		</form>
	);
};

export default Input;
