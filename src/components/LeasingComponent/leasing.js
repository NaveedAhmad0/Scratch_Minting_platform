import React from "react";
import "./leasing.css";
import Nftimg from "../../assets/3.jpeg";
import Nftimg1 from "../../assets/4.jpeg";
import Nftimg3 from "../../assets/2.jpeg";
import Nftimg2 from "../../assets/5.jpeg";
import logoscratch from "../../assets/VectorLogo.svg";
import dot from "../../assets/dot.png";
import { useContext } from "react";
import Navbar from "../Navbar/navb";
import LeasingCard from "../Leasing-card-component/LeasingCard";
import userContext from "../../context/userContext";
import { useState } from "react";

// const LeasingCardDeck = ({ id }) => {
// 	return (
// 		<div className="card-deck">
// 			<LeasingCard id={id} title="Roboto Minting" image={Nftimg} />
// 			<LeasingCard id={id} title="Roboto Minting" image={Nftimg1} />
// 			<LeasingCard id={id} title="Roboto Minting" image={Nftimg3} />
// 			<LeasingCard id={id} title="Roboto Minting" image={Nftimg2} />
// 		</div>
// 	);
// };

const Leasing = () => {
	const [currentTab, setCurrentTab] = useState("");
	const [selected, setSelected] = useState(false);
	const {
		connect,
		account,
		smartContract,
		stakingContract,
		tokenids,
		getConfig,
		CONFIG,
		stakedTokenids,
	} = useContext(userContext);

	console.log(tokenids.length);

	const i = [
		{
			id: 1,
			title: "Deposit NFT",
			content: (
				<form
				//  onSubmit={handleSubmit(onSubmit)}
				>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							flexDirection: "column",
						}}>
						<h5>CHOOSE FROM YOUR NFTS TO DEPOSITE AS RENT</h5>

						{account ? (
							<>
								{/* {selected && <p className="text-danger">{message}</p>} */}
								<div className="text-info mb-3">
									You have {tokenids.length} NFT's to Deposit for renting
								</div>
								<div className=" cardDdeck">
									{tokenids.length > 0 &&
										tokenids.map((tokenid) => (
											<LeasingCard
												id={tokenid}
												// image={Nftimg3}
												key={tokenid}
												// register={register}
											/>
										))}
								</div>
							</>
						) : (
							<p className="text-danger">
								No Nfts Found, Please Connect your wallet.
							</p>
						)}

						<div className="button-row mb-5">
							<button type="submit" className="button37">
								Deposit Your NFT
							</button>
						</div>
					</div>
				</form>
			),
		},

		{
			id: 2,
			title: "Rent",
			content: (
				<form
				// onSubmit={handleSubmit(onSubmitClaim)}
				>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							flexDirection: "column",
						}}>
						<h5>CHOOSE THE NFT YOU WANT TO RENT</h5>

						{account && (
							<div className="cardDdeck">
								{/* {stakedTokenids.map((Tokenid) => ( */}
								<LeasingCard image={Nftimg3} />
								<LeasingCard image={Nftimg2} />
								<LeasingCard image={Nftimg} />
								<LeasingCard image={Nftimg1} />
								{/* //  key={Tokenid}
							//  id={Tokenid}
							//  register={register} */}
								{/* ))} */}
							</div>
						)}
						{!account && (
							<p className="text-danger">
								No Nfts Found, Please Connect your wallet.
							</p>
						)}
						{/* {account && stakedTokenids.length === 0 && (
							<div className="text-danger">
								You have not staked any NFT's, Please Stake First.
							</div>
						)} */}

						<div className="button-row mb-5">
							<button type="submit" className="button37">
								Rent NFT
							</button>
						</div>
					</div>
				</form>
			),
		},

		{
			id: 3,
			title: "Return",
			content: (
				<form
				//  onSubmit={handleSubmit(onSubmitUnstake)}
				>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							flexDirection: "column",
						}}>
						<h5>CHOOSE AN NFT TO RETURN</h5>

						{account && (
							<div className="cardDdeck">
								{/* {stakedTokenids.map((Tokenid) => ( */}
								<LeasingCard image={Nftimg} />
								<LeasingCard image={Nftimg1} />
								<LeasingCard image={Nftimg2} />
								<LeasingCard image={Nftimg3} />
								{/* // id={Tokenid}
									// register={register} */}
								{/* ))} */}
							</div>
						)}
						{!account && (
							<p className="text-danger">
								No Nfts Found, Please Connect your wallet.
							</p>
						)}
						{/* {account && stakedTokenids.length === 0 && (
							<div className="text-danger">
								You have not staked any NFT's, Please Stake First.
							</div>
						)} */}

						<div className="button-row mb-5">
							<button type="submit" className="button37">
								Return Nft
							</button>
						</div>
					</div>
				</form>
			),
		},
	];

	return (
		<div className="container">
			<Navbar connect={connect} address={account} />
			<div className="btn-main m-auto mb-4 bg-green">
				<button className="button37 " onClick={() => setSelected(!selected)}>
					Select
				</button>

				{selected &&
					i.map((tab) => {
						return (
							<button
								onClick={() => {
									if (currentTab.id !== tab.id) {
										setCurrentTab(tab);
										setSelected(false);
									}
								}}
								className=" button37 hover"
								key={tab.id}>
								{tab.title}
							</button>
						);
					})}
			</div>
			<div className="align-items-center contentStaking">
				{currentTab.content}
			</div>
		</div>
	);
};

export default Leasing;
