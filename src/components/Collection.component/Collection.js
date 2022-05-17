import React from "react";
import image from "../../assets/Group 889.png";

function Collection() {
	return (
		<div className="container-fluid mt-5 d-flex">
			<div className="col-6">
				<h1 className="text-black">
					Crazy Minting <br /> NFT Collection{" "}
				</h1>
				<h6>2499/4000 minted</h6>
				<p>Max 2 nft per wallet. price 0.03 ETH + GAS</p>
				<p>Mint is live until 23 apr 04:00H</p>

				<button className="btn btn-success mr-3">Mint</button>
				<button className="btn btn-success">Whitelist Now</button>
			</div>
			<div className="col-6">
				<img src={image} alt="imge" width={220} height={220} />
			</div>
		</div>
	);
}

export default Collection;
