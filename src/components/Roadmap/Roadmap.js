import React from "react";
import "./roadmap.css";
// import img1 from "../../assets/Group 889.png";
import logo1 from "../../assets/2.jpeg";
import logo2 from "../../assets/3.jpeg";
import logo3 from "../../assets/4.jpeg";
import logo4 from "../../assets/5.jpeg";
import roadmap from "../../assets/roadmap-line.png";

const RoadmapComp = ({ percent, logo, margin, bot }) => {
	return (
		<div className="container roadmapCompOne">
			<div className="col-5 content-img text-right">
				<img src={logo} alt="logo"></img>
			</div>
			<div className="col-2 justify-content-center">
				<div
					className="roadmappercentage"
					style={{
						marginLeft: `${margin}`,
						marginBottom: `${bot}`,
					}}>
					<p style={{ alignSelf: "center", paddingTop: "10px" }}>{percent}%</p>
				</div>
			</div>
			<div className="col-5 justify-content-center">
				<div className="content-textCard ">
					<h3>NEQUE PORRO QUISQUAM</h3>
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s
					</p>
				</div>
			</div>
		</div>
	);
};
const RoadmapCompTwo = (props) => {
	return (
		<div className="container roadmapCompTwo">
			<div className="col-5 text-right" style={{ alignItems: "flex-start" }}>
				<div className="content-textCard text-right m-auto">
					<h3>NEQUE PORRO QUISQUAM</h3>
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s
					</p>
				</div>
			</div>
			<div className="col-2 justify-content-right">
				<div className="m-auto roadmappercentage2">
					<p style={{ alignSelf: "center", paddingTop: "10px" }}>
						{props.percent}%
					</p>
				</div>
			</div>
			<div className="col-5 content-img text-left">
				<img src={props.logo} alt="logo"></img>
			</div>
		</div>
	);
};
function Roadmap() {
	return (
		<div className="backgroundRoadmap">
			<div className="road-title">
				<h1>
					<span style={{ color: "green" }}>OUR</span> ROADMAPS
				</h1>
			</div>
			<div className=" roadmap">
				<div className="blabla">
					<RoadmapComp logo={logo4} percent="10" margin="75px" bot="90px" />
					<RoadmapCompTwo logo={logo3} percent="25" />
					<RoadmapComp logo={logo2} percent="50" margin="70px" />
					<RoadmapCompTwo logo={logo1} percent="100" />
				</div>
			</div>
		</div>
	);
}

export default Roadmap;
