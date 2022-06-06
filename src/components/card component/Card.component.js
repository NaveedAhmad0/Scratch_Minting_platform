import React from "react";
import logo1 from "../../assets/smart-city-assets/1.svg";
import logo2 from "../../assets/smart-city-assets/2.svg";
import logo3 from "../../assets/smart-city-assets/3.svg";
import logo4 from "../../assets/smart-city-assets/4.svg";
import "./card.css";

function Card() {
	return (
		<div className="container">
			<div className="row row-cols-2 row-cols-lg-6 g-2 g-lg-3">
				<div className="col">
					<div className="card2">
						<img src={logo1} alt="" className="logo" />
					</div>
				</div>
				<div className="col">
					<div className="card2">
						<img src={logo2} alt="" className="logo" />
					</div>
				</div>
				<div className="col">
					<div className="card2">
						<img src={logo3} alt="" className="logo" />
					</div>
				</div>
				<div className="col">
					<div className="card2">
						<img src={logo4} alt="" className="logo" />
					</div>
				</div>
				<div className="col">
					<div className="card2">
						<img src={logo3} alt="" className="logo" />
					</div>
				</div>
				<div className="col">
					<div className="card2">
						<img src={logo4} alt="" className="logo" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Card;
