import React from "react";
import logo from "../../assets/Group 889.png";
function Footer() {
	return (
		<div className="container-fluid footer text-white d-flex">
			<div className="col-3">
				<img src={logo} alt="Logo" />
				<p className="text-dark text-left">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit.
					Exercitationem, provident!
				</p>
			</div>
			<div className="col-3">
				<div>
					<h3>Sitemap</h3>
					<div>
						<a href="#">Home</a>
					</div>
					<div>
						<a href="#">About</a>
					</div>
					<div>
						<a href="#">Roadmap</a>
					</div>
					<div>
						<a href="#">FAQ</a>
					</div>
					<div>
						<a href="#">Articles</a>
					</div>
				</div>
			</div>
			<div className="col-3">
				<div>
					<h3>Sitemap</h3>
					<div>
						<a href="#">Home</a>
					</div>
					<div>
						<a href="#">About</a>
					</div>
					<div>
						<a href="#">Roadmap</a>
					</div>
					<div>
						<a href="#">FAQ</a>
					</div>
					<div>
						<a href="#">Articles</a>
					</div>
				</div>
			</div>
			<div className="col-3">
				<h3>Sitemap</h3>
				<input type="text" name="" placeholder="Email Address" />
				<button className="btn btn-success">icon</button>
			</div>
		</div>
	);
}

export default Footer;
