import axios from 'axios';
import { useState } from 'react';
import Input from './Input';
const key = '5981d9a201637c7f38ce7ea03d532d92';
const base = 'https://api.openweathermap.org/data/2.5/';

function Weather() {
	const [query, setQuery] = useState('');
	const [error, seterror] = useState(null);
	const [loading, setLoading] = useState(false);
	const [obtained, setObtained] = useState(null);

	// const fetchData = async () => {
	// 	try {
	// 		setLoading(true);
	// 		seterror(null);
	// 		const response = await fetch(
	// 			`${base}?q=${query}&units=metric&APPID=${key}`
	// 		);

	// 		console.log(response);
	// 		if (!response.ok) {
	// 			throw new Error('Uh-oh, Something went wrong. Try Again..');
	// 		}

	// 		const data = await response.json();
	// 		console.log(data);
	// 		setObtained(data);
	// 		setLoading(false);
	// 	} catch (err) {
	// 		console.log(err.message);
	// 		seterror(err.message);
	// 		setLoading(false);
	// 	}
	// };
	const fetchData = async () => {
		try {
			setLoading(true);
			seterror(null);
			const response = await axios.get(
				`${base}weather?q=${query}&units=metric&APPID=${key}`
			);

			const data = await response.data;
			setObtained(data);
			setLoading(false);
		} catch (err) {
			console.log(err.response.data.message);
			seterror(err.message);
			setLoading(false);
		}
	};

	return (
		<section
			className="text-center text-white d-flex flex-column pt-5"
			style={{
				backgroundImage:
					'radial-gradient(circle, #359ad6, #00afdf, #00c1ce, #00cfa4, #22d869)',
				height: '100vh',
			}}
		>
			<h1 className="pt-5 pb-3">Mini - Temp Weather App</h1>
			<h2 className="pb-3">Search for any Location</h2>
			<Input query={query} setQuery={setQuery} fetchData={fetchData} />
			{loading && <h1>Loading...</h1>}
			{error && <h1>{error}</h1>}
			{!loading && !error && obtained && (
				<div>
					<h2>{obtained.name}</h2>
					<h1>Temp : {Math.round(obtained.main.temp)} &#8451;</h1>
					<h1>{obtained.weather[0].description}</h1>
				</div>
			)}
		</section>
	);
}

export default Weather;
