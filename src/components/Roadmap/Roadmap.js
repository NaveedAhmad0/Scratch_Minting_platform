import React from "react";
import "./roadmap.css";
import img1 from "../../assets/Group 889.png";
import logo1 from "../../assets/smart-city-assets/1.svg";
import logo2 from "../../assets/smart-city-assets/2.svg";
import logo3 from "../../assets/smart-city-assets/3.svg";
import logo4 from "../../assets/smart-city-assets/4.svg";

function Roadmap() {
  return (
    <div className="roadmap">
      <div style={{ paddingTop: "4%" }}>
        <h5>
          <span style={{ color: "#61A62D" }}>Our</span> Goals
        </h5>
        <br />
        <h1>
          <span style={{ color: "#61A62D" }}>Our </span>Roadmaps
        </h1>
      </div>
      <br />
      <div className="container d-flex">
        <div class="card">
          <div style={{ padding: "2%" }} className="col-10 d-flex">
            <div className="box">
              <h1 style={{ paddingTop: "" }}>10%</h1>
            </div>
            <div className="text container text-left">
              <h4 style={{ fontWeight: "bolder" }}>Neque porro quisquam</h4>
              <p>
                Contrarytopopularbelief,Lorem Ipsumisnotsimplyrandom
                text.IthasrootsinapieceofclassicalLatinliteraturefrom45BC,makingitover2000yearsold.RichardMcClintock,aLatinprofessoratHampden-SydneyCollegeinVirginia,lookeduponeo
              </p>
            </div>
          </div>
        </div>
        <div className="col-2" id="card22">
          <img src={logo1} className="logo" height={200} width={100} alt="nft" />
        </div>
      </div>
<br></br>
      <div className="container d-flex">
        <div class="card">
          <div style={{ padding: "2%" }} className="col-10 d-flex">
            <div className="box">
              <h1 style={{ paddingTop: "" }}>20%</h1>
            </div>
            <div className="text container text-left">
              <h4 style={{ fontWeight: "bolder" }}>Neque porro quisquam</h4>
              <p>
                Contrarytopopularbelief,Lorem Ipsumisnotsimplyrandom
                text.IthasrootsinapieceofclassicalLatinliteraturefrom45BC,makingitover2000yearsold.RichardMcClintock,aLatinprofessoratHampden-SydneyCollegeinVirginia,lookeduponeo
              </p>
            </div>
          </div>
        </div>
        <div className="col-2">
          <img src={logo2} className="logo" height={200} width={100} alt="nft" />
        </div>
      </div>
<br></br>
	  <div className="container d-flex">
        <div class="card">
          <div style={{ padding: "2%" }} className="col-10 d-flex">
            <div className="box">
              <h1 style={{ paddingTop: "" }}>50%</h1>
            </div>
            <div className="text container text-left">
              <h4 style={{ fontWeight: "bolder" }}>Neque porro quisquam</h4>
              <p>
                Contrarytopopularbelief,Lorem Ipsumisnotsimplyrandom
                text.IthasrootsinapieceofclassicalLatinliteraturefrom45BC,makingitover2000yearsold.RichardMcClintock,aLatinprofessoratHampden-SydneyCollegeinVirginia,lookeduponeo
              </p>
            </div>
          </div>
        </div>
        <div className="col-2">
          <img src={logo3} className="logo" height={200} width={100} alt="nft" />
        </div>
      </div>
<br></br>
	  <div className="container d-flex">
        <div class="card">
          <div style={{ padding: "2%" }} className="col-10 d-flex">
            <div className="box">
              <h1 style={{ paddingTop: "" }}>70%</h1>
            </div>
            <div className="text container text-left">
              <h4 style={{ fontWeight: "bolder" }}>Neque porro quisquam</h4>
              <p>
                Contrarytopopularbelief,Lorem Ipsumisnotsimplyrandom
                text.IthasrootsinapieceofclassicalLatinliteraturefrom45BC,makingitover2000yearsold.RichardMcClintock,aLatinprofessoratHampden-SydneyCollegeinVirginia,lookeduponeo
              </p>
            </div>
          </div>
        </div>
        <div className="col-2">
          <img src={logo4} className="logo" height={200} width={100} alt="nft" />
        </div>
      </div>
<br>
</br>
	  <div className="container d-flex ">
        <div class="card">
          <div style={{ padding: "2%" }} className="col-10 d-flex ">
            <div className="box">
              <h1 style={{ paddingTop: "" }}>100%</h1>
            </div>
            <div className="text container text-left">
              <h4 style={{ fontWeight: "bolder" }}>Neque porro quisquam</h4>
              <p>
                Contrarytopopularbelief,Lorem Ipsumisnotsimplyrandom
                text.IthasrootsinapieceofclassicalLatinliteraturefrom45BC,makingitover2000yearsold.RichardMcClintock,aLatinprofessoratHampden-SydneyCollegeinVirginia,lookeduponeo
              </p>
            </div>
          </div>
        </div>
        <div className="col-2">
          <img src={logo3} className="logo" height={200} width={100} alt="nft" />
        </div>
      </div>
<br></br>
    </div>
  );
}

export default Roadmap;
