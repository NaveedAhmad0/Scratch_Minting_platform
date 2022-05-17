import React from "react";
import pic from "../../assets/Group 889.png";
import "./team.css";

function Team() {
	return (
		<div>
			<p>Team Members</p>
			<h1>Meet The Crew</h1>
			<div className="container ">
				<div className="d-flex mt-5 px-5">
					<div className="card">
						<img src={pic} alt="" />
					</div>
					<div className="card">
						<img src={pic} alt="" />
					</div>
					<div className="card">
						<img src={pic} alt="" />
					</div>
					<div className="card">
						<img src={pic} alt="" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Team;
