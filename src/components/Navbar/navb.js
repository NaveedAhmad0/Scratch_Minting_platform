/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../Navbar/nav.css"
function Navbar() {
	return (
		<div className="container-fluid mt-4">
			<nav className="navbar navbar-expand-lg px-4 m-auto navbar-light bg-light">
				{/* <img src={logo} alt="LOGO" /> */}
				<a className="navbar-brand" href="#">
					LOGO
				</a>
				<button
					className="navbar-toggler"
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
							<a className="nav-link" href="#">
								Home
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								about
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Roadmap
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Team
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								FAQ
							</a>
						</li>
					</ul>
					<button
						className="btn btn-outline-success my-2 my-sm-0"
						type="submit">
						Connect
					</button>
				</div>
			</nav>
			<br />
		</div>
	);
}

export default Navbar;
