import React from "react";
import logo from "../../assets/VectorLogo.svg";
import { Container, Row, Col } from "react-bootstrap";
import { FaTelegramPlane } from "react-icons/fa";
import "./footer.css";

function Footer() {
	return (
		<footer className="footer">
			<Container>
				<Row>
					<Col lg="3" md="6" sm="6">
						<div className="logo-footer">
							<img src={logo} alt="Logo" />
							<p className="text-left text-left1">
								Lorem ipsum, dolor sit amet consectetur adipisicing elit.
								Exercitationem, provident!
							</p>
						</div>
					</Col>

					<Col lg="2" md="3" sm="6" className="sitemap-style">
						<h5>Sitemap</h5>
						<div className="list__item">
							<h6 className="css1234">
								<a href="#">Home</a>
							</h6>
							<h6 className="css1234">
								<a href="#">About</a>
							</h6>
							<h6 className="css1234">
								<a href="#">Roadmap</a>
							</h6>
							<h6 className="css1234">
								<a href="#">FAQ</a>
							</h6>
							<h6 className="css1234">
								<a href="#">Articles</a>
							</h6>
						</div>
					</Col>

					<Col lg="2" md="3" sm="6" className="sitemap-style">
						<h5>Sitemap</h5>
						<div className="list__item">
							<h6 className="css1234">
								<a href="#">Home</a>
							</h6>
							<h6 className="css1234">
								<a href="#">About</a>
							</h6>
							<h6 className="css1234">
								<a href="#">Roadmap</a>
							</h6>
							<h6 className="css1234">
								<a href="#">FAQ</a>
							</h6>
							<h6 className="css1234">
								<a href="#">Articles</a>
							</h6>
						</div>
					</Col>

					<Col lg="2" md="3" sm="6" className="sitemap-style">
						<h5>Sitemap</h5>
						<div className="list_box">
							<input
								type="text"
								className="newsletter"
								placeholder="Email address"
							/>
							<button id="footerbutton" className="btn btn-success fly-btn">
								<FaTelegramPlane />
							</button>
						</div>
					</Col>
				</Row>
			</Container>
		</footer>

		// <div className="container-fluid footer text-white d-flex">
		// 	<div className="col-3">
		// 		<img src={logo} alt="Logo" />
		// 		<p className="text-left">
		// 			Lorem ipsum, dolor sit amet consectetur adipisicing elit.
		// 			Exercitationem, provident!
		// 		</p>
		// 	</div>
		// 	<div className="col-3">
		// 		<div>
		// 			<h3>Sitemap</h3>
		// 			<div>
		// 				<a href="#">Home</a>
		// 			</div>
		// 			<div>
		// 				<a href="#">About</a>
		// 			</div>
		// 			<div>
		// 				<a href="#">Roadmap</a>
		// 			</div>
		// 			<div>
		// 				<a href="#">FAQ</a>
		// 			</div>
		// 			<div>
		// 				<a href="#">Articles</a>
		// 			</div>
		// 		</div>
		// 	</div>
		// 	<div className="col-3">
		// 		<div>
		// 			<h3>Sitemap</h3>
		// 			<div>
		// 				<a href="#">Home</a>
		// 			</div>
		// 			<div>
		// 				<a href="#">About</a>
		// 			</div>
		// 			<div>
		// 				<a href="#">Roadmap</a>
		// 			</div>
		// 			<div>
		// 				<a href="#">FAQ</a>
		// 			</div>
		// 			<div>
		// 				<a href="#">Articles</a>
		// 			</div>
		// 		</div>
		// 	</div>
		// 	<div className="col-3">
		// 		<h3>Sitemap</h3>
		// 		<input type="text" name="" placeholder="Email Address" />
		// 		<button className="btn btn-success">icon</button>
		// 	</div>
		// </div>
	);
}

export default Footer;
