/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../Navbar/nav.css";
import logo from "../../assets/smart-city-assets/Vector Smart logo.svg";

function Navbar({connect}) {
	return (
		<div id="nbn" className="container">
			<nav className="navbar navbar-expand-lg m-auto">
				<img id="navimg" className="navbar-brand" src={logo} alt="LOGO" />
				{/* <a className="navbar-brand" href="#"> */}
				{/* {logo}
				</a> */}
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
				{/* <div className="responsive-navbar-nav" /> */}
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav m-auto">
						<li className="nav-item active">
							<a className="nav-link" href="#home">
								Home
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#about">
								about
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
					</ul>
					<button
						className="button37"
						// className=""
						id="btn"
						type="submit" onClick={()=>{connect()}}>
						Connect
					</button>
				</div>
			</nav>
			<br />
		</div>
	);
}

export default Navbar;
