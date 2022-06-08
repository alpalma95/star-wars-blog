import React, {useContext} from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/SWlogo.png";
import {Context} from "../store/appContext";

export const Navbar = () => {
	
	const {store, actions} = useContext(Context);

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<div className="container">
			<Link to="/">
				<img src={Logo} alt="Star Wars logo" width="100px"/>
			</Link>
				<div className="ml-auto">
					<button className="btn btn-primary" onClick={() => actions.addFavorite({test: "bla"})}>Favorites <span className="badge bg-secondary rounded-circle">{store.favorites.length}</span></button>
			</div>
			</div>
		</nav>
	);
};
