import React from "react";
import logo from "../../assets/VectorLogo.svg";
import "./footer.css";

function Footer() {
	return (
		<footer className="footer-section">
			<div className="container">
				<div className="footer-content py-5">
					<div className="row">
						<div className="col-lg-4">
							<div className="footer-widget">
								<div className="footer-logo">
									<a href="#">
										<img src={logo} alt="Logo" className="img-fluid" />
									</a>
								</div>
								<div className="footer-social-icon">
									<a href="#">
										<i class="fab fa-facebook-f social-bg"></i>
									</a>
									<a href="#">
										<i class="fab fa-twitter social-bg"></i>
									</a>
									<a href="#">
										<i class="fab fa-linkedin-in social-bg"></i>
									</a>
									<a href="#">
										<i class="fab fa-instagram social-bg"></i>
									</a>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="footer-widget">
								<div className="footer-widget-heading">
									<h3>SITEMAP</h3>
								</div>
								<ul>
									<li>
										<a href="#">
											<span> &#62;&nbsp; </span>Home
										</a>
									</li>
									<li>
										<a href="#">
											<span> &#62;&nbsp; </span>Home
										</a>
									</li>
									<li>
										<a href="#">
											<span> &#62;&nbsp; </span>About
										</a>
									</li>
									<li>
										<a href="#">
											<span> &#62;&nbsp; </span>About
										</a>
									</li>
									<li>
										<a href="#">
											<span> &#62;&nbsp; </span>Roadmap
										</a>
									</li>
									<li>
										<a href="#">
											<span> &#62;&nbsp; </span>Roadmap
										</a>
									</li>
									<li>
										<a href="#">
											<span> &#62;&nbsp; </span>Articles
										</a>
									</li>
									<li>
										<a href="#">
											<span> &#62;&nbsp; </span>Articles
										</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="footer-widget">
								<div className="footer-widget-heading">
									<h3>NEWSLETTER</h3>
								</div>
								<div className="footer-text">
									<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
								</div>
								<div className="subscribe-form">
									<form>
										<input type="text" placeholder="Enter Email here..." />
										<button>
											<i className="fa fa-paper-plane"></i>
										</button>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<hr></hr>
			<div className="copywrite">
				<p>&#169; COPYRIGHT 2022, ALL RIGHTS RESERVED</p>
			</div>
		</footer>
	);
}

export default Footer;