import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/SWlogo.png"

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<img src={Logo} alt="Star Wars logo" width="100px"/>
			</Link>
			<div className="ml-auto">
				<Link to="/details">
					<button className="btn btn-primary">Details</button>
				</Link>
			</div>
		</nav>
	);
};
