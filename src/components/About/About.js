import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import pic2 from "../../assets/smart-city-assets/artist1.png";
import pic3 from "../../assets/smart-city-assets/artist2.png";
import "./about.css";

function About() {
	return (
		<>
			{/* <div  className="container d-flex" style={{paddingTop:"5%"}}> */}
			<div id="about" class="container">
				<div class="row">
					<div class="col-sm-6">
						<div className="text-left">
							<p>
								<span style={{ color: "#61A62D" }}>The </span>Story
							</p>
							<h1 className="text-black">
								<span style={{ color: "#61A62D" }}>About</span> Smart
								<br />
								Money revolution
							</h1>
							<p style={{ fontSize: "" }}>
								Contrary to popular belief,Lorem Ipsum is not simply random
								text. It has roots in a piece of classical Latin literature from
								45BC,making it over 2000 years old. Richard McClintock, a Latin
								professor at Hampden-Sydney Collegein Virginia,looked upon eof
								the more obscure Latin words,consectetur,from a Lorem Ipsum
								passage,
							</p>
							<p>
								<FontAwesomeIcon
									style={{ color: "#61A62D" }}
									icon={faCircleCheck}
								/>{" "}
								Nullanonorciajustoefficiturmaximus.
							</p>
							<p>
								<FontAwesomeIcon
									style={{ color: "#61A62D" }}
									icon={faCircleCheck}
								/>{" "}
								Inidantequiserattempusluctus.
							</p>
							<p>
								<FontAwesomeIcon
									style={{ color: "#61A62D" }}
									icon={faCircleCheck}
								/>{" "}
								Duisviverranislegetmattisgravida.
							</p>
						</div>
					</div>
					<div class="col-sm-6">
						<h6 className="meet text-left">
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
								<div class="card-body" style={{ padding: "" }}>
									<h5 class="card-title text-black">Berneice Tran</h5>
									<p class="card-text" style={{ marginTop: "-31px" }}>
										Founder
									</p>
									{/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
								</div>
							</div>
							<div className="card" id="csscard">
								<img
									// id="cssimg177"
									id="aboutImage"
									// style={{ width: "18rem", padding: "11%", height: "20rem" }}
									className="card-img-top"
									src={pic3}
									alt="CardImage"
								/>
								<div class="card-body">
									<h5 class="card-title text-black">Nathan Bean</h5>
									<p class="card-text" style={{ marginTop: "-33px" }}>
										Co-Founder
									</p>
									{/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
								</div>
							</div>
						</div>
						{/* </div>
              </div>
            </div> */}
					</div>
				</div>
				<div className="container mt-5 text-left">
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
				</div>
			</div>
			{/* </div> */}
		</>
	);
}

export default About;
