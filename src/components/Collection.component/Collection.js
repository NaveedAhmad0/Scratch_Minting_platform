/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import "../Collection.component/Collection.css";
import Navbar from "../../components/Navbar/navb";
import img4 from "../../assets/roboto nft assets/herorobot.png";
import axios from "axios";
import { useEffect } from "react";
import userContext from "../../context/userContext";

function Collection({ connect, account, smartContract, CONFIG }) {
	const [feedback, setFeedback] = useState(``);
	const [claimingNft, setClaimingNft] = useState("");
	const [nftSupply, setNftSupply] = useState(0);
	const [nftMinted, setNftMinted] = useState(0);

	const { tokenids, setTokenIdsMinted } = useContext(userContext);
	const mintNFTs = async () => {
		console.log("Smart Contract", smartContract);

		const mintedTokenId = await smartContract.methods.totalSupply().call();
		console.log(mintedTokenId);

		// let cost = CONFIG.WEI_COST2;
		// if (tokenids <= 10) {
		// 	cost = CONFIG.WEI_COST;
		// } else if (tokenids > 10) {
		// 	cost = CONFIG.WEI_COST2;
		// }

		let cost;
		if (mintedTokenId < 10) {
			cost = CONFIG.WEI_COST;
			console.log("non regular");
		}
		if (mintedTokenId >= 10) {
			cost = CONFIG.WEI_COST2;
			console.log("regular");
		}
		// let cost;
		// if (tokenids.some((e) => e <= 10)) {
		// 	cost = CONFIG.WEI_COST;
		// 	console.log("non regular");
		// }
		// if (tokenids.some((e) => e > 10)) {
		// 	cost = CONFIG.WEI_COST2;
		// 	console.log("regular");
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
				// const updatedTokenIds = smartContract.methods.totalSupply().call();
				setTokenIdsMinted(parseInt(mintedTokenId) + 1);
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
				<div className="row rowcollection">
					<div className="col-sm-6 col-md-6 col-lg-6">
						<img
							src={img4}
							className="img5"
							alt="imge"
							width={560}
							height={480}
						/>
					</div>
					<div className="col-sm-12 col-md-6 col-lg-6">
						<div
							className="text-left collectionrem"
							style={{ marginLeft: "6rem" }}
							id="css1">
							<h1 id="icon123" className="text-white">
								CRAZY<br></br> MINTING <br /> 
								NFT<br></br> COLLECTION{" "}
							</h1>
							<h5 className="" style={{ color: "#61A62D" }}>
								{nftMinted}/{nftSupply}
								<span className="text-white" style={{ paddingLeft: "1rem" }}>
									MINTED
								</span>
							</h5>
							<p className="text-white">
								Max 2 nft per wallet. price 0.03 ETH + GAS
							</p>
							<p className="text-white" style={{marginTop: "-1rem"}}>
								Mint is live until{" "}
								<span style={{ color: "#61A62D" }}>23 apr 04:00H</span>
							</p>
							<div className="buttondivtag">
								<button
									className="button123"
									onClick={() => {
										mintNFTs();
									}}>
									MINT NOW
								</button>
								<button style={{ marginLeft: "1rem" }} className="button123">
									WISHLIST NOW
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
