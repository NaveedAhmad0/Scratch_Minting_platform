import React from "react";
import image from "../../assets/Group 889.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { faFileCircleCheck} from '@fortawesome/free-solid-svg-icons'
import "./about.css";

function About() {
	return (
		<>
			<div className="container-fluid mt-5 d-flex">
				<div className="col-md-6 text-left">
					<p><span style={{ color: "#61A62D" }}>The </span>Story</p>
					<h1 className="text-black">
					<span style={{ color: "#61A62D" }}>About</span>Smart
						<br />
						Moneyrevolution
					</h1>
					<p>
						Contrary to popular belief,Lorem Ipsum is not simply random text. It
						has roots in a piece of classical Latin literature from 45BC,making
						it over 2000 years old. Richard McClintock, a Latin professor at
						Hampden-Sydney Collegein Virginia,looked upon eof the more obscure
						Latin words,consectetur,from a Lorem Ipsum passage,
					</p>
					<p><FontAwesomeIcon style={{color:"#61A62D"}} icon={faCircleCheck} />Nullanonorciajustoefficiturmaximus.</p>
					<p><FontAwesomeIcon style={{color:"#61A62D"}} icon={ faCircleCheck} />Inidantequiserattempusluctus.</p>
					<p><FontAwesomeIcon style={{color:"#61A62D"}} icon={ faCircleCheck} />Duisviverranislegetmattisgravida.</p>
				</div>
				<div className="col-6">
					<p><span style={{ color: "#61A62D" }}>Meet</span> The Artist</p>
					<img src={image} alt="imge" width={220} height={220} />
				</div>
			</div>
			<div className="container-fluid px-5 mt-5 text-left">
				<p><span style={{ color: "#61A62D" }}>Easy</span> Steps</p>
				<h1>
				<span style={{ color: "#61A62D" }}>About</span> Smart <br />
					money revolution
				</h1>
			</div>
			<br></br>
			<br></br>
			<div className="container d-flex m-auto">
				<div>
					<div className="circle text-white">
						<h1>1</h1>
					</div>
					<br />
					<h5>connect your wallet</h5>
				</div>
				<div className="dashline"></div>

				<div>
					<div className="circle text-white">
						<h1>2</h1>
					</div>
					<br />
					<h5>
						Select Your <br /> Quantity
					</h5>
				</div>
				<div className="dashline"></div>

				<div>
					<div className="circle text-white">
						<h1>3</h1>
					</div>
					<br />
					<h5>Confirm The Section</h5>
				</div>
				<div className="dashline"></div>

				<div>
					<div className="circle text-white">
						<h1>4</h1>
					</div>
					<br />
					<h5>Receive Your NFTs</h5>
				</div>
			</div>
		</>
	);
}

export default About;
