import React, { useState, useEffect } from 'react';
import './Advices.css';

const Advices = () => {
	const [advices, setAdvices] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const fetchAdvices = async () => {
		try {
			setLoading(true);
			setError(null);
			const res = await fetch('https://api.adviceslip.com/advice');
			const data = await res.json();

			setAdvices(data);
			setLoading(false);
		} catch (error) {
			setLoading(false);
			setError(error.message);
		}
	};

	useEffect(() => {
		fetchAdvices();
	}, []);

	const loadHandler = () => {
		fetchAdvices();
	};

	return (
		<section className="all-advices pt-5">
			<h1 className="text-center py-5 text-white">Advices</h1>
			<article className="d-flex justify-content-center">
				{loading && <h2 className="text-center text-white">Loading...</h2>}
				{error && <h2 className="text-center text-white">{error}</h2>}
				{!loading && !error && advices && (
					<div className="card text-center" style={{ width: '25rem' }}>
						<div className="card-header">Advice</div>
						<div className="card-body">
							<h5 className="card-title">{advices.slip.advice}</h5>
							<button onClick={loadHandler} className="btn btn-primary mt-4">
								Give me Advice!
							</button>
						</div>
					</div>
				)}
			</article>
		</section>
	);
};

export default Advices;
