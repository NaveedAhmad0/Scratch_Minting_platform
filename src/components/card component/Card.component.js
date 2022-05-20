import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import pic from "../../assets/Group 889.png";
import logo1 from "../../assets/smart-city-assets/1.svg";
import logo2 from "../../assets/smart-city-assets/2.svg";
import logo3 from "../../assets/smart-city-assets/3.svg";
import logo4 from "../../assets/smart-city-assets/4.svg";
import "./card.css";

function Card() {
	return (
		<div className="d-flex mt-5 px-5">
		
			<div className="card2">
				<img src={logo1} alt="" className="logo" height={200} width={100}/>
			</div>
			<div className="card2">
				<img src={logo2} alt="" className="logo" height={200} width={100}/>
			</div>
			<div className="card2">
				<img src={logo3} alt="" className="logo" height={200} width={100} />
			</div>
			<div className="card2">
				<img src={logo4} alt="" className="logo" height={200} width={100}/>
			</div>
			<div className="card2">
				<img src={logo3} alt="" className="logo" height={200} width={100}/>
			</div>
			<div className="card2">
				<img src={logo4} alt="" className="logo" height={200} width={10} />
			</div>
		</div>
	);
}

export default Card;
