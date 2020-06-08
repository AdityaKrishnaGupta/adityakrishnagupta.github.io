import React from "react";
import logo from "../../logo.svg";
import "./Navbar.css";

const Navbar = () => {
	return (
		<div className="navbar-div">
			<img className="logo" src={logo} />
			<h1 className="logo-text">CODE n COFFEE</h1>
			<hr />
			<div className="links">
				<a href="#">Join Us</a>
				<a href="#">Manage</a>
				<a href="#">About</a>
			</div>
		</div>
	);
};

export default Navbar;
