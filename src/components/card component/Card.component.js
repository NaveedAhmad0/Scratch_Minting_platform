import React from "react";
import pic from "../../assets/Group 889.png";
import "./card.css";

function Card() {
	return (
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
			<div className="card">
				<img src={pic} alt="" />
			</div>
			<div className="card">
				<img src={pic} alt="" />
			</div>
		</div>
	);
}

export default Card;
