import React from "react";
import image from "../../assets/Group 889.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faFileCircleCheck } from "@fortawesome/free-solid-svg-icons";
import pic2 from "../../assets/smart-city-assets/artist1.png";
import pic3 from "../../assets/smart-city-assets/artist2.png";
import "./about.css";

function About() {
  return (
    <>
      <div id="about" className="container d-flex" style={{paddingTop:"5%"}}>
        <div className="col-md-6 text-left">
          <p>
            <span style={{ color: "#61A62D" }}>The </span>Story
          </p>
          <h1 className="text-black">
            <span style={{ color: "#61A62D" }}>About</span> Smart
            <br />
            Money revolution
          </h1>
          <p style={{ fontSize: "1.1rem" }}>
            Contrary to popular belief,Lorem Ipsum is not simply random text. It
            has roots in a piece of classical Latin literature from 45BC,making
            it over 2000 years old. Richard McClintock, a Latin professor at
            Hampden-Sydney Collegein Virginia,looked upon eof the more obscure
            Latin words,consectetur,from a Lorem Ipsum passage,
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
		<h6 className="meet">
          <span style={{ color: "#61A62D" }}>Meet</span> The Artist
        </h6>
        <br></br>
        <div className="col-md-6 d-flex justify-content-between" style={{paddingTop:"10%"}}>
		
          <div class="card" style={{ width: "18rem" }}>
            <img class="card-img-top" src={pic2} alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">Berneice Tran</h5>
              <p class="card-text">Founder</p>
              {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
            </div>
          </div>
		  <div class="card" style={{ width: "18rem" }}>
            <img class="card-img-top" src={pic3} alt="Card image cap" />
            <div class="card-body" style={{height:"1rem"}}>
              <h5 class="card-title">Naathan Bean</h5>
              <p class="card-text">Co-Founder</p>
              {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
            </div>
          </div>
        </div>
      </div>
      <div className="container px-5 mt-5 text-left">
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
      <div className="container d-flex m-auto">
        <div>
          <div className="circle text-white">
            <h1>1</h1>
          </div>
          <br />
          <h5 className="text-black">connect your wallet</h5>
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
    </>
  );
}

export default About;
