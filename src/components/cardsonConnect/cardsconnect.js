import React from "react";
import "./cardsconnect.css";
import receivenft from "../../assets/roboto nft assets/receive-nft.png";
import confirm from "../../assets/roboto nft assets/confirm.png";
import quantity from "../../assets/roboto nft assets/quantity.png";
import wallet from "../../assets/roboto nft assets/wallet.png";

const cards = () => {
	return (
		<div id="cardsconnect" className="container">
			<div className="aboutrobotocard text-white">
				<p className="cardsText">
					<span
						className="cardsText"
						style={{ color: "#69B330", paddingRight: "1rem" }}>
						ABOUT
					</span>
					SMART
				</p>
				<p className="cardsText text-white"> MONEY REVALUTION</p>
			</div>
			<div className="cards-list">
				<div className="card 1">
					<div className="card_image">
						<img className="logonft" src={wallet} alt="recievenft" />
						<h4 style={{ marginTop: "2rem", fontWeight: "900" }}>
							CONNECT YOUR{" "}
						</h4>
						<h4 style={{ fontWeight: "900" }}>WALLET</h4>
					</div>
				</div>

				<div className="card 1">
					<div className="card_image">
						<img className="logonft" src={quantity} alt="recievenft" />
						<h4 style={{ marginTop: "2rem", fontWeight: "900" }}>
							SELECT YOUR{" "}
						</h4>
						<h4 style={{ fontWeight: "900" }}>QUANTITY</h4>
					</div>
				</div>

				<div className="card 1">
					<div className="card_image">
						<img className="logonft" src={confirm} alt="recievenft" />
						<h4 style={{ marginTop: "2rem", fontWeight: "900" }}>
							CONFIRM THE{" "}
						</h4>
						<h4 style={{ fontWeight: "900" }}>SECTION</h4>
					</div>
				</div>

				<div className="card 1">
					<div className="card_image">
						<img className="logonft" src={receivenft} alt="recievenft" />
						<h4 style={{ marginTop: "2rem", fontWeight: "900" }}>
							RECEIVE YOUR{" "}
						</h4>
						<h4 style={{ fontWeight: "900" }}>NFTs</h4>
					</div>
				</div>
			</div>
		</div>
	);
};

export default cards;
