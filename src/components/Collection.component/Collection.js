// import React from "react";
// import image from "../../assets/Group 889.png";
// import "../Collection.component/Collection.css";
// import Navbar from "../../components/Navbar/navb";
// import bgimg from "../../assets/smart-city-assets/bg.png";
// import img1 from "../../assets/smart-city-assets/v.png";
// import img2 from "../../assets/smart-city-assets/c.png";
// import img3 from "../../assets/smart-city-assets/d.png";

// function Collection() {
// 	const myStyle = {
// 		backgroundImage: `url(${bgimg})`,
// 		height: "120vh",
// 		// marginTop: "-70px",
// 		// fontSize:'50px',
// 		backgroundSize: "cover",
// 		backgroundRepeat: "no-repeat",
// 	};
// 	return (
// 		<div id="home" style={myStyle}>
// 			<Navbar />
// 			<div className="container mt-5 d-flex" id="collection">
// 				<div class="row">
// 					<div class="col-sm-6 col-md-7">
// 						<div
// 							className="text-left"
// 							id="css1"
// 							// style={{ marginLeft: "5%", marginTop: "5%" }}
// 						>
// 							<h1
// 								id="icon123"
// 								// style={{ fontSize: "4.3vw", fontWeight: "bolder" }}
// 								className="text-white">
// 								Crazy <span style={{ color: "#61A62D" }}>Minting</span> <br />{" "}
// 								NFT Collection{" "}
// 							</h1>
// 							<h3 className="text-white">2499/4000 minted</h3>
// 							{/* <br></br> */}
// 							<h6 className="text-white">
// 								Max 2 nft per wallet. price 0.03 ETH + GAS
// 							</h6>
// 							<h6 className="text-white">
// 								Mint is live until{" "}
// 								<span style={{ color: "#61A62D" }}>23 apr 04:00H</span>
// 							</h6>
// 							<br></br>
// 							<button className="button123" id="mintbutton">
// 								Mint Now
// 							</button>
// 							<button className="button123">Whitelist Now</button>
// 							{/* <button className="btn btn-success mr-3">Mint Now</button>
//           <button className="btn btn-success">Whitelist Now</button> */}
// 						</div>
// 					</div>
// 					<div
// 						className="col-sm-6 col-md-5 cssnft"
// 						style={{ marginLeft: "-4rem" }}>
// 						{/* <img src={image} alt="imge" width={220} height={220} /> */}

// 						<img
// 							src={img2}
// 							className="img2"
// 							alt="imge"
// 							// style={{ marginTop: "48%", marginRight: "41%" }}
// 							width={220}
// 							height={260}
// 						/>
// 						<img
// 							src={img3}
// 							className="img3"
// 							alt="imge"
// 							// style={{ marginLeft: "-27rem", zIndex: "1" }}
// 							width={400}
// 							height={450}
// 						/>
// 						<img
// 							src={img1}
// 							className="img4"
// 							alt="imge"
// 							// style={{ marginTop: "-78%", marginLeft: "67%" }}
// 							width={230}
// 							height={270}
// 						/>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }

// export default Collection;

import React, { useState } from "react";
// import image from "../../assets/Group 889.png";
import "../Collection.component/Collection.css";
import Navbar from "../../components/Navbar/navb";
import img1 from "../../assets/smart-city-assets/v.png";
import img2 from "../../assets/smart-city-assets/c.png";
import img3 from "../../assets/smart-city-assets/d.png";
import axios from "axios";

function Collection({ connect, account, smartContract, CONFIG }) {
	const [feedback, setFeedback] = useState("");
	const [claimingNft, setClaimingNft] = useState("");

	const mintNFTs = async () => {
		console.log("Smart Contract", smartContract);
		let cost = CONFIG.WEI_COST;
		let gasLimit = CONFIG.GAS_LIMIT;
		let totalCostWei = String(cost);
		let totalGasLimit = String(gasLimit);

		setClaimingNft(true);

		smartContract.methods
			.mint(account, 1)
			.send({
				gasLimit: String(totalGasLimit),
				gasPrice: "40000000000",
				from: account,
				to: CONFIG.CONTRACT_ADDRESS,
				value: totalCostWei,
			})
			.once("error", (err) => {
				setFeedback("Sorry, something went wrong please try again later.");
				setClaimingNft(false);
				setTimeout(() => {
					setFeedback("");
				}, 3000);
			})
			.then((res) => {
				console.log(res);
				axios
					.post("https://scratch-backend.herokuapp.com/api/user/create-user", {
						userAddress: `${res.from}`,
						transactionHash: `${res.transactionHash}`,
						transactionTime: new Date().toISOString(),
					})
					.then(function (response) {
						console.log("Data sent to api", response);
					})
					.catch(function (error) {
						console.log(error);
					});
				setFeedback(
					`WOW, the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it.`
				);
				setClaimingNft(false);
				setTimeout(() => {
					setFeedback("");
				}, 3000);
			});
	};

	return (
		<div id="home" className="mystyle">
			<Navbar connect={connect} address={account} />
			<div className="container mt-5 mb-3 d-flex" id="collection">
				<div className="row">
					<div className="col-sm-12 col-md-6 col-lg-6">
						<div className="text-left colllec" id="css1">
							<h1 id="icon123" className="text-white">
								Crazy <span style={{ color: "#61A62D" }}>Minting</span> <br />{" "}
								NFT Collection{" "}
							</h1>
							<h3 className="text-white">2499/4000 minted</h3>
							<h6 className="text-white">
								Max 2 nft per wallet. price 0.03 ETH + GAS
							</h6>
							<h6 className="text-white">
								Mint is live until{" "}
								<span style={{ color: "#61A62D" }}>23 apr 04:00H</span>
							</h6>
							<br></br>
							<button
								className="button123"
								onClick={() => {
									mintNFTs();
								}}>
								Mint Now
							</button>
							<button className="button123">Whitelist Now</button>
						</div>
					</div>
					<div className="col-sm-6 col-md-6 col-lg-6">
						{/* <div className="col-2 d-flex"> */}
						<img
							src={img2}
							className="img2"
							alt="imge"
							// style={{ marginTop: "48%", marginRight: "41%" }}
							width={250}
							height={260}
						/>
						<img
							src={img3}
							className="img3"
							alt="imge"
							// style={{ marginLeft: "-27rem", zIndex: "1" }}
							width={350}
							height={400}
						/>
						<img
							src={img1}
							className="img4"
							alt="imge"
							// style={{ marginTop: "-78%", marginLeft: "67%" }}
							width={230}
							height={270}
						/>
						{/* </div> */}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Collection;
