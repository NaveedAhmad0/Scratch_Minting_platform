import React from "react";
import image from "../../assets/Group 889.png";
import "../Collection.component/Collection.css"

function Collection() {
  return (
    <div className="container-fluid mt-5 d-flex">
      <div className="col-6">
        <div className="col-md-6 text-left" style={{marginLeft:"5%",marginTop:"5%"}}>
          <h1 style={{fontSize:"3.3vw",fontWeight:"bolder"}} className="text-black">
            Crazy <span style={{ color: "#61A62D" }}>Minting</span> <br /> NFT
            Collection{" "}
          </h1>
          <h3>2499/4000 minted</h3>
		  <br></br>
          <p>Max 2 nft per wallet. price 0.03 ETH + GAS</p>
          <p>Mint is live until <span style={{ color: "#61A62D" }}>23 apr 04:00H</span></p>

          <button className="button123">Mint Now</button>
		  <button className="button123">Whitelist Now</button>
          {/* <button className="btn btn-success mr-3">Mint Now</button>
          <button className="btn btn-success">Whitelist Now</button> */}
        </div>
      </div>
      <div className="col-6">
        <img src={image} alt="imge" width={220} height={220} />
      </div>
    </div>
  );
}

export default Collection;
