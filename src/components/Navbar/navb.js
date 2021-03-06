import React from "react";
import "../Navbar/nav.css";
import logo from "../../assets/smart-city-assets/Vector Smart logo.svg";
import { Link } from "react-router-dom";

function Navbar({ connect, address }) {
	return (
		<div id="nbn" className="container">
			<nav className="navbar navbar-expand-lg m-auto">
				<img id="navimg" className="navbar-brand" src={logo} alt="LOGO" />
				<button
					className="navbar-toggler responsive-navbar-nav"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav m-auto">
						<li className="nav-item active">
							<Link to="/" className="nav-link">
								Home
							</Link>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#about">
								About
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#roadmap">
								Roadmap
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#team">
								Team
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#faq">
								FAQ
							</a>
						</li>
						<li className="nav-item">
							<Link to="/staking" className="nav-link">
								Staking
							</Link>
						</li>
					</ul>

					<button
						className="button37"
						id="btn"
						type="submit"
						onClick={() => {
							connect();
						}}>
						{address
							? `${address.slice(0, 5)}...${address.slice(address.length - 4)}`
							: "Connect Wallet"}
					</button>
				</div>
			</nav>
			<br />
		</div>
	);
}

export default Navbar;
