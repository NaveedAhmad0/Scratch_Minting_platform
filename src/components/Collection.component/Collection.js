import React from "react";
import image from "../../assets/Group 889.png";
import "../Collection.component/Collection.css";
import Navbar from "../../components/Navbar/navb";
import bgimg from "../../assets/smart-city-assets/bg.jpg";
import img1 from "../../assets/smart-city-assets/v.png";
import img2 from "../../assets/smart-city-assets/c.png";
import img3 from "../../assets/smart-city-assets/d.png";

function Collection() {
	const myStyle={
        backgroundImage: `url(${bgimg})` ,
        height:'100vh',
        marginTop:'-70px',
        // fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
  return (
    <div style={myStyle}>
      <Navbar />
      <div className="container mt-5 d-flex" id="collection">
        <div className="col-10">
          <div
            className="col-md-6 text-left"
            style={{ marginLeft: "5%", marginTop: "5%" }}
          >
            <h1
              id="icon123"
              style={{ fontSize: "4.3vw", fontWeight: "bolder" }}
              className="text-white"
            >
              Crazy <span style={{ color: "#61A62D" }}>Minting</span> <br /> NFT
              Collection{" "}
            </h1>
            <h3 className="text-white">2499/4000 minted</h3>
            <br></br>
            <h6 className="text-white">
              Max 2 nft per wallet. price 0.03 ETH + GAS
            </h6>
            <h6 className="text-white">
              Mint is live until{" "}
              <span style={{ color: "#61A62D" }}>23 apr 04:00H</span>
            </h6>
            <br></br>
            <button className="button123">Mint Now</button>
            <button className="button123">Whitelist Now</button>
            {/* <button className="btn btn-success mr-3">Mint Now</button>
          <button className="btn btn-success">Whitelist Now</button> */}
          </div>
        </div>
        <div className="col-6" style={{marginLeft:"-24rem"}}>
          {/* <img src={image} alt="imge" width={220} height={220} /> */}
		  
		  <img src={img2} alt="imge" style={{marginTop:"48%",marginRight:"41%"}} width={220} height={220} />
		  <img src={img3} alt="imge" style={{marginLeft:"-27rem", zIndex:"1"}} width={400} height={450} />
		  <img src={img1} alt="imge" style={{marginTop:"-78%", marginLeft:"67%"}} width={230} height={270} />

        </div>
      </div>
    </div>
  );
}

export default Collection;
