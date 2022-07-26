import React from "react";
import "./roadmap.css";
// import img1 from "../../assets/Group 889.png";
import logo1 from "../../assets/2.jpeg";
import logo2 from "../../assets/3.jpeg";
import logo3 from "../../assets/4.jpeg";
import logo4 from "../../assets/5.jpeg";
import roadmap from "../../assets/roadmap-line.png";

function Roadmap() {
	return (
		<div className="backgroundRoadmap">
			<div className="road-title">
				<h1>
					<span style={{ color: "green" }}>OUR</span> ROADMAPS
				</h1>
			</div>
			<div className="roadmap">
				<div className="roadmap-container">
					<div className="roadmap-content1">
						<div className="timeline1">
							<div className="content-img">
								<img src={logo1} alt="logo"></img>
							</div>
							<div className="myCircle text-white">
								<p>10%</p>
							</div>
							<div className="content-textCard">
								<h3>NEQUE PORRO QUISQUAM</h3>
								<p>
									Lorem Ipsum is simply dummy text of the printing and
									typesetting industry. Lorem Ipsum has been the industry's
									standard dummy text ever since the 1500s
								</p>
							</div>
						</div>
					</div>

					<div className="roadmap-content2">
						<div className="timeline2">
							<div className="content-textCard">
								<h3>NEQUE PORRO QUISQUAM</h3>
								<p>
									Lorem Ipsum is simply dummy text of the printing and
									typesetting industry. Lorem Ipsum has been the industry's
									standard dummy text ever since the 1500s
								</p>
							</div>
							<div className="myCircle text-white">
								<p>25%</p>
							</div>
							<div className="content-img">
								<img src={logo2} alt="logo"></img>
							</div>
						</div>
					</div>

					<div className="roadmap-content3">
						<div className="timeline3">
							<div className="content-img">
								<img src={logo3} alt="logo"></img>
							</div>
							<div className="myCircle text-white">
								<p>50%</p>
							</div>
							<div className="content-textCard">
								<h3>NEQUE PORRO QUISQUAM</h3>
								<p>
									Lorem Ipsum is simply dummy text of the printing and
									typesetting industry. Lorem Ipsum has been the industry's
									standard dummy text ever since the 1500s
								</p>
							</div>
						</div>
					</div>

					<div className="roadmap-content4">
						<div className="timeline4">
							<div className="content-textCard">
								<h3>NEQUE PORRO QUISQUAM</h3>
								<p>
									Lorem Ipsum is simply dummy text of the printing and
									typesetting industry. Lorem Ipsum has been the industry's
									standard dummy text ever since the 1500s
								</p>
							</div>
							<div className="myCircle text-white">
								<p>100%</p>
							</div>
							<div className="content-img">
								<img src={logo4} alt="logo"></img>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Roadmap;
