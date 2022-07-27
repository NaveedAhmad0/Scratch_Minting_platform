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
			<div id="about" className="container">
				<h6 className="aboutus text-white">ABOUT US -------&gt; </h6>
				<div className="row">
					<div className="col-sm-6">
						<div className="text-left">
							{/* <p>
								<span style={{ color: "#61A62D" }}>The </span>Story
							</p> */}
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
									icon={faCircleCheck}
								/>{" "}
								Nullanonorciajustoefficiturmaximus.
							</p>
							<p className="text-white">
								<FontAwesomeIcon
									style={{ color: "#61A62D" }}
									icon={faCircleCheck}
								/>{" "}
								Inidantequiserattempusluctus.
							</p>
							<p className="text-white">
								<FontAwesomeIcon
									style={{ color: "#61A62D" }}
									icon={faCircleCheck}
								/>{" "}
								Duisviverranislegetmattisgravida.
							</p>
							<button style={{marginLeft:""}}className="button123">READ MORE</button>
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
						{/* <h6 className="meet text-left">
							<span style={{ color: "#61A62D" }}>Meet</span> The Artist
						</h6>
						<br></br>
						<div className="d-flex justify-content-between cssabout1">
							<div className="card" id="csscard">
								<img
									className="card-img-top "
									id="aboutImage"
									src={pic2}
									alt="CardImgCap"
								/>
								<div className="card-body" style={{ padding: "" }}>
									<h5 className="card-title text-black">Berneice Tran</h5>
									<p className="card-text" style={{ marginTop: "-31px" }}>
										Founder
									</p>
								</div>
							</div>
							<div className="card" id="csscard">
								<img
									id="aboutImage"
									className="card-img-top"
									src={pic3}
									alt="CardImage"
								/>
								<div className="card-body">
									<h5 className="card-title text-black">Nathan Bean</h5>
									<p className="card-text" style={{ marginTop: "-33px" }}>
										Co-Founder
									</p>
								</div>
							</div>
						</div> */}
					</div>
				</div>
				{/* <div className="container mt-5 text-left">
					<p>
						<span style={{ color: "#61A62D" }}>Easy</span> Steps
					</p>
					<h1>
						<span style={{ color: "#61A62D" }}>About</span> Smart <br />
						money revolution
					</h1>
				</div>
				<br></br>
				<br></br>
				<div className="container circleline d-flex m-auto">
					<div>
						<div className="circle text-white">
							<h1>1</h1>
						</div>
						<br />
						<h5 className="text-black" id="css1111">
							connect your wallet
						</h5>
					</div>
					<div className="dashline"></div>

					<div>
						<div className="circle text-white">
							<h1>2</h1>
						</div>
						<br />
						<h5 className="text-black">
							Select Your <br /> Quantity
						</h5>
					</div>
					<div className="dashline"></div>

					<div>
						<div className="circle text-white">
							<h1>3</h1>
						</div>
						<br />
						<h5 className="text-black">Confirm The Section</h5>
					</div>
					<div className="dashline"></div>

					<div>
						<div className="circle text-white">
							<h1>4</h1>
						</div>
						<br />
						<h5 className="text-black">Receive Your NFTs</h5>
					</div>
				</div> */}
			</div>
			{/* </div> */}
		</>
	);
}

export default About;
