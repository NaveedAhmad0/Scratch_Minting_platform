import React from "react";
import image from "../../assets/Group 889.png";
import "./about.css";

function About() {
	return (
		<>
			<div className="container-fluid mt-5 d-flex">
				<div className="col-6">
					<p>The Story</p>
					<h1 className="text-black">
						AboutSmart
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
					<p>Nullanonorciajustoefficiturmaximus.</p>
					<p>Inidantequiserattempusluctus.</p>
					<p>Duisviverranislegetmattisgravida.</p>
				</div>
				<div className="col-6">
					<p>Meet The Artist</p>
					<img src={image} alt="imge" width={220} height={220} />
				</div>
			</div>
			<div className="container-fluid px-5 mt-5 text-left">
				<p>Easy Steps</p>
				<h1>
					About Smart <br />
					money revolution
				</h1>
			</div>
			<div className="container d-flex m-auto">
				<div>
					<div className="circle text-white">
						<h1>1</h1>
					</div>
					<br />
					<h6>hdfkjahf</h6>
				</div>
				<div className="dashline"></div>

				<div>
					<div className="circle text-white">
						<h1>2</h1>
					</div>
					<br />
					<h6>
						Select Your <br /> Quantity
					</h6>
				</div>
				<div className="dashline"></div>

				<div>
					<div className="circle text-white">
						<h1>3</h1>
					</div>
					<br />
					<h6>sahfdkj</h6>
				</div>
				<div className="dashline"></div>

				<div>
					<div className="circle text-white">
						<h1>4</h1>
					</div>
					<br />
					<h6>bkashkalhsd</h6>
				</div>
			</div>
		</>
	);
}

export default About;
