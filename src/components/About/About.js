import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import pic2 from "../../assets/smart-city-assets/artist1.png";
import pic3 from "../../assets/smart-city-assets/artist2.png";
import pic55 from "../../assets/roboto nft assets/about-robot-img.png";
import "./about.css";

function About() {
	return (
		<>
			<div className="aboutus text-white">ABOUT US -------&gt; </div>
			<div id="about" className="container">
				<div className="row">
					<div className="col-sm-6">
						<div className="text-left">
							<h1 id="aboutroboto" className="text-white">
								<span style={{ color: "#61A62D" }}>ABOUT</span> SMART
								<br />
								MONEY REVOLUTION
							</h1>
							<p className="text-white" style={{ fontSize: "" }}>
								Contrary to popular belief,Lorem Ipsum is not simply random
								text. It has roots in a piece of classical Latin literature from
								45BC,making it over 2000 years old. Richard McClintock, a Latin
								professor at Hampden-Sydney Collegein Virginia,looked upon eof
								the more obscure Latin words,consectetur,from a Lorem Ipsum
								passage,
							</p>
							<p className="text-white">
								<FontAwesomeIcon
									style={{ color: "#61A62D" }}
									className="mr-1"
									icon={faCircleCheck}
								/>{" "}
								Nullanonorciajustoefficiturmaximus.
							</p>
							<p className="text-white">
								<FontAwesomeIcon
									style={{ color: "#61A62D" }}
									className="mr-1"
									icon={faCircleCheck}
								/>{" "}
								Inidantequiserattempusluctus.
							</p>
							<p className="text-white">
								<FontAwesomeIcon
									style={{ color: "#61A62D" }}
									className="mr-1"
									icon={faCircleCheck}
								/>{" "}
								Duisviverranislegetmattisgravida.
							</p>
							<button className="button123">READ MORE</button>
						</div>
					</div>
					<div className="col-sm-6">
						<img
							src={pic55}
							className="pic55"
							alt="imge"
							width={730}
							height={780}
						/>
					</div>
				</div>
			</div>
		</>
	);
}

export default About;
