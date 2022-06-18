import React, { useState } from "react";
import Navbar from "../../components/Navbar/navb";
import logo1 from "../../assets/smart-city-assets/1.svg";
import logo2 from "../../assets/smart-city-assets/2.svg";
import logo3 from "../../assets/smart-city-assets/3.svg";
import logo4 from "../../assets/smart-city-assets/4.svg";
import "./staking.css";
import VAULTABI from "./VAULTABI.json";
import StakingCard from "../../components/Staking Card/StakingCard";
import { useEffect } from "react";
function Staking() {
	const [currentTab, setCurrentTab] = useState("");
	const [nfts, setNfts] = useState([]);

	const i = [
		{
			id: 1,
			title: "Stake",
			content: (
				<div>
					<div>
						<h5
							style={{
								marginTop: "6%",
								textAlign: "left",
								marginLeft: "10%",
								marginBottom: "3%",
							}}>
							Choose from your NFTs for staking
						</h5>
						<div className="container">
							<div className="row row-cols-2 row-cols-lg-6 g-2 g-lg-3">
								{nfts.map((nft) => (
									<StakingCard nft={nft} />
								))}
							</div>
						</div>
						<div className="btn-main">
							<button className="button37">Approve</button>
							<button className="button37">Stake Your NFT</button>
						</div>
					</div>
				</div>
			),
		},

		{
			id: 2,
			title: "Claim",
			content: (
				<div>
					<div>
						<h5
							style={{
								marginTop: "6%",
								textAlign: "left",
								marginLeft: "10%",
								marginBottom: "3%",
							}}>
							Choose NFTs for claiming Rewards
						</h5>
						<div className="container">
							<div className="row row-cols-2 row-cols-lg-6 g-2 g-lg-3">
								{nfts.map((nft) => (
									<StakingCard nft={nft} />
								))}
							</div>
						</div>
						<div className="btn-main">
							<button className="button37">Claim Your Rewards</button>
						</div>
					</div>
				</div>
			),
		},

		{
			id: 3,
			title: "Unstake",
			content: (
				<div>
					<div>
						<h5
							style={{
								marginTop: "6%",
								textAlign: "left",
								marginLeft: "10%",
								marginBottom: "3%",
							}}>
							Choose from your NFTs for Unstaking
						</h5>
						<div className="container">
							<div className="row row-cols-2 row-cols-lg-6 g-2 g-lg-3">
								{nfts.map((nft) => (
									<StakingCard nft={nft} />
								))}
							</div>
						</div>
						<div className="btn-main">
							<button className="button37">Approve</button>
							<button className="button37">Unstake and Get Your Rewards</button>
						</div>
					</div>
				</div>
			),
		},
	];

	return (
		<div className="stack-main">
			<Navbar />
			<div className="btn-main">
				{i.map((tab) => {
					return (
						<button
							onClick={() => {
								if (currentTab.id !== tab.id) {
									setCurrentTab(tab);
								}
							}}
							className="button37">
							{tab.title}
						</button>
					);
				})}
			</div>
			<div>{currentTab.content}</div>
		</div>
	);
}

export default Staking;
