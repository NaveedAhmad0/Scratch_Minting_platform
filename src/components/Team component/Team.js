import React from "react";
import pic1 from "../../assets/artist3.png";
import pic2 from "../../assets/artist1.png";
import pic3 from "../../assets/artist2.png";
import pic4 from "../../assets/artist56.png";
import "./team.css";

function Team() {
	return (
		<div className="team-style">
			<p><span style={{ color: "green" }}>Team</span> Members</p>
			<h1><span style={{ color: "green", fontStyle:"'Poppins', sans-serif" }}>Meet</span> The Crew</h1>
			<div className="container ">
				<div className="d-flex mt-5 px-100 card-deck ">
					<div className="card mycard">
						<img src={pic1} alt="" />
						<h4>Berneice Train</h4>
						<h6>Founder</h6>
					</div>
					<div className="card mycard">
						<img src={pic2} alt="" />
						<h4>Nathan Bean</h4>
						<h6>Co-Founder</h6>
					</div>
					<div className="card mycard">
						<img src={pic3} alt="" />
						<h4>Lynnette Wilkes</h4>
						<h6>Artist</h6>
					</div>
					<div className="card mycard">
						<img src={pic4} alt="" />
						<h4>Claudia Hicks</h4>
						<h6>Co-Artist</h6>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Team;
