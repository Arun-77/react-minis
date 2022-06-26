import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-md bg-primary fixed-top">
			<div className="container">
				<NavLink
					className="navbar-brand text-white"
					to="home"
					style={{ letterSpacing: '1px' }}
				>
					REACT APPS
				</NavLink>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarTogglerDemo02"
					aria-controls="navbarTogglerDemo02"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<FaBars />
				</button>
				<div className="collapse navbar-collapse" id="navbarTogglerDemo02">
					<ul className="navbar-nav me-2 mb-auto mb-lg-auto">
						<li className="nav-item">
							<NavLink
								className={({ isActive }) =>
									isActive
										? 'nav-link text-white text-center'
										: 'nav-link text-white opacity-75 text-center'
								}
								aria-current="page"
								to="noteslist"
							>
								Notes
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								to="weather"
								className={({ isActive }) =>
									isActive
										? 'nav-link text-white text-center'
										: 'nav-link text-white opacity-75 text-center'
								}
							>
								Weather
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								className={({ isActive }) =>
									isActive
										? 'nav-link text-white text-center'
										: 'nav-link text-white opacity-75 text-center'
								}
								to="advices"
							>
								Advice
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
