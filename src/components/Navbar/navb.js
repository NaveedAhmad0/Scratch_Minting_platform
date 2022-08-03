import React from "react";
import "../Navbar/nav.css";
import logo from "../../assets/smart-city-assets/Vector Smart logo.svg";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Navbar1({ connect, address }) {
	return (
		// <div id="nbn" className="container">
		// 	<nav className="navbar navbar-expand-lg m-auto">
		// 		<img id="navimg" className="navbar-brand" src={logo} alt="LOGO" />
		// 		<button
		// 			className="navbar-toggler responsive-navbar-nav"
		// 			type="button"
		// 			data-toggle="collapse"
		// 			data-target="#navbarSupportedContent"
		// 			aria-controls="navbarSupportedContent"
		// 			aria-expanded="false"
		// 			aria-label="Toggle navigation">
		// 			<span className="navbar-toggler-icon"></span>
		// 		</button>
		// 		<div className="collapse navbar-collapse" id="#navbarSupportedContent">
		// 			<ul className="navbar-nav m-auto">
		// 				<li className="nav-item active">
		// 					<Link to="/" className="nav-link">
		// 						Home
		// 					</Link>
		// 				</li>
		// 				<li className="nav-item">
		// 					<a className="nav-link" href="#about">
		// 						About
		// 					</a>
		// 				</li>
		// 				<li className="nav-item">
		// 					<a className="nav-link" href="#roadmap">
		// 						Roadmap
		// 					</a>
		// 				</li>

		// 				<li className="nav-item">
		// 					<Link to="/staking" className="nav-link">
		// 						Staking
		// 					</Link>
		// 				</li>
		// 				<li className="nav-item">
		// 					<Link to="/leasing" className="nav-link">
		// 						Leasing
		// 					</Link>
		// 				</li>
		// 			</ul>

		// 			<button
		// 				className="button37"
		// 				id="btn"
		// 				type="submit"
		// 				onClick={() => {
		// 					connect();
		// 				}}>
		// 				{address
		// 					? `${address.slice(0, 5)}...${address.slice(address.length - 4)}`
		// 					: "Connect Wallet"}
		// 			</button>
		// 		</div>
		// 	</nav>
		// 	<br />
		// </div>

		<Navbar collapseOnSelect expand="lg" variant="light">
			<Container>
				<Navbar.Brand href="#home">
					<img id="navimg" className="navbar-brand" src={logo} alt="LOGO" />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav">
					{" "}
					<i className="fa-solid text-white fa-bars"></i>{" "}
				</Navbar.Toggle>
				<Navbar.Collapse id="responsive-navbar-nav" variant="light">
					<Nav className="m-auto">
						<Nav.Link>
							<Link to="/" className="nav-link">
								Home
							</Link>
						</Nav.Link>
						<Nav.Link href="#about" className="m-auto">
							About
						</Nav.Link>
						<Nav.Link href="#Roadmap" className="m-auto">
							Roadmap
						</Nav.Link>
						<Nav.Link>
							<Link to="/staking" className="nav-link">
								Staking
							</Link>
						</Nav.Link>
						<Nav.Link>
							<Link to="/leasing" className="nav-link">
								Leasing
							</Link>
						</Nav.Link>
					</Nav>
					<Nav>
						<button
							className="button37"
							id="btn"
							type="submit"
							onClick={() => {
								connect();
							}}>
							{address
								? `${address.slice(0, 5)}...${address.slice(
										address.length - 4
								  )}`
								: "Connect Wallet"}
						</button>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default Navbar1;
