import React, { useContext, useState } from "react";
import "../Collection.component/Collection.css";
import Navbar from "../../components/Navbar/navb";
// import img1 from "../../assets/smart-city-assets/v.png";
// import img2 from "../../assets/smart-city-assets/c.png";
// import img3 from "../../assets/smart-city-assets/d.png";
import img4 from "../../assets/roboto nft assets/herorobot.png";
// import img6 from "../../assets/roboto nft assets/hero-beackground.jpg";
import axios from "axios";
import { useEffect } from "react";
import userContext from "../../context/userContext";

function Collection({ connect, account, smartContract, CONFIG }) {
	const [feedback, setFeedback] = useState(``);
	const [claimingNft, setClaimingNft] = useState("");
	const [nftSupply, setNftSupply] = useState(0);
	const [nftMinted, setNftMinted] = useState(0);

	const { tokenids } = useContext(userContext);
	const mintNFTs = async () => {
		console.log("Smart Contract", smartContract);
		let cost = CONFIG.WEI_COST2;
		// if (tokenids <= 10) {
		// 	cost = CONFIG.WEI_COST;
		// } else if (tokenids > 10) {
		// 	cost = CONFIG.WEI_COST2;
		// }
		let gasLimit = CONFIG.GAS_LIMIT;
		let totalCostWei = String(cost);
		let totalGasLimit = String(gasLimit);

		setClaimingNft(true);

		smartContract.methods
			.mint(1)
			.send({
				gasLimit: String(totalGasLimit),
				gasPrice: "40000000000",
				value: totalCostWei,
				from: account,
				to: CONFIG.CONTRACT_ADDRESS,
			})
			.once("error", (err) => {
				console.log(err);
				setFeedback("Sorry, something went wrong please try again later.");
				setClaimingNft(false);
				setTimeout(() => {
					setFeedback("");
				}, 10000);
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
					`Mint Successfull, the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it.`
				);
				setClaimingNft(false);
				setTimeout(() => {
					setFeedback("");
				}, 10000);
			})
			.catch((error) => {
				if (error.code === 4001) {
					alert(error.message);
				} else {
					console.error(error);
				}
			});
	};

	const totalSupply = async () => {
		const nftsply = await smartContract.methods.maxSupply().call();
		setNftSupply(nftsply);
		const nftminted = await smartContract.methods.totalSupply().call();
		setNftMinted(nftminted);
	};

	useEffect(() => {
		totalSupply();
	}, []);

	return (
		<div id="home" className="mystyle">
			<Navbar connect={connect} address={account} />
			{feedback.length > 0 && <div className="result">{feedback}</div>}

			<div className="container mt-5 mb-3 d-flex" id="collection">
				<div className="row">
					<div className="col-sm-6 col-md-6 col-lg-6">
						<img
							src={img4}
							className="img5"
							alt="imge"
							width={730}
							height={680}
						/>
					</div>
					<div className="col-sm-12 col-md-6 col-lg-6">
						<div
							className="text-left colllec"
							style={{ marginLeft: "12rem" }}
							id="css1">
							<h1 id="icon123" className="text-white">
								CRAZY MINTING <br /> NFT COLLECTION{" "}
							</h1>
							<h3 className="" style={{ color: "#61A62D" }}>
								{nftMinted}/{nftSupply}
								<span className="text-white" style={{ paddingLeft: "1rem" }}>
									MINTED
								</span>
							</h3>
							<h6 className="text-white">
								Max 2 nft per wallet. price 0.03 ETH + GAS
							</h6>
							<h6 className="text-white">
								Mint is live until{" "}
								<span style={{ color: "#61A62D" }}>23 apr 04:00H</span>
							</h6>

							<br></br>
							<div className="buttondivtag">
								<button
									className="button123"
									onClick={() => {
										mintNFTs();
									}}>
									MINT NOW
								</button>
								<button style={{ marginLeft: "1rem" }} className="button123">
									Wishlist Now
								</button>
							</div>
						</div>
					</div>
				</div>
				{/* {feedback.length > 0 && <div className="result">{feedback}</div>} */}
			</div>
		</div>
	);
}

export default Collection;
