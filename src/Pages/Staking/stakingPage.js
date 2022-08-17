/* eslint-disable eqeqeq */
import React, { useState } from "react";
import Navbar from "../../components/Navbar/navb";
import "./staking.css";
import StakingCard from "../../components/Staking Card/StakingCard";
import { useEffect } from "react";
import { useContext } from "react";
import userContext from "../../context/userContext";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
function Staking() {
	const [currentTab, setCurrentTab] = useState("");
	const [selected, setSelected] = useState(false);
	const [message, setMessage] = useState("");

	const {
		connect,
		account,
		smartContract,
		stakingContract,
		tokenids,
		getTokenIds,
		getConfig,
		CONFIG,
		staked,
		setStaked,
		unStaked,
		setUnStaked,
		stakedTokenids,
	} = useContext(userContext);

	const approve = async () => {
		let gasLimit = CONFIG.GAS_LIMIT;
		let totalGasLimit = String(gasLimit);

		await smartContract.methods
			.setApprovalForAll(CONFIG.STAKING_CONTRACT, true)
			.send({
				gasLimit: String(totalGasLimit),
				gasPrice: "40000000000",
				from: account,
				to: CONFIG.CONTRACT_ADDRESS,
			})
			.catch((error) => {
				if (error.code === 4001) {
					alert(error.message);
				}
			});
	};

	const stakeNfts = async (data) => {
		let gasLimit = CONFIG.GAS_LIMIT;
		let totalGasLimit = String(gasLimit);
		console.log(data);

		data[0] &&
			(await stakingContract.methods
				.stake(data)
				.send({
					gasLimit: String(totalGasLimit),
					gasPrice: "40000000000",
					from: account,
					to: CONFIG.STAKING_CONTRACT,
				})
				.then(() => {
					setMessage("Congrats ,You Have Staked Your NFT Successfully!");
					// window.location.reload();
					setTimeout(() => {
						setMessage("");
					}, 10000);
					setStaked(!staked);
					<Navigate to="/staking" />;
					setCurrentTab(currentTab == 3);
				})
				.catch((error) => {
					if (error.code === 4001) {
						alert(error.message);
					}
				}));
	};
	console.log(currentTab.id);
	const unstakeNfts = async (data) => {
		let gasLimit = CONFIG.GAS_LIMIT;
		let totalGasLimit = String(gasLimit);
		console.log(data);

		data[0] &&
			(await stakingContract.methods
				.unstake(data)
				.send({
					gasLimit: String(totalGasLimit),
					gasPrice: "40000000000",
					from: account,
					to: CONFIG.STAKING_CONTRACT,
				})
				.then(() => {
					setMessage(
						"You Have Successfully Unstaked Your NFT, Please check rewards!"
					);

					setTimeout(() => {
						setMessage("");
					}, 10000);
					setUnStaked(!unStaked);
					setCurrentTab(currentTab.id === 1);
				}));
	};

	const claimRewards = async (data) => {
		let gasLimit = CONFIG.GAS_LIMIT;
		let totalGasLimit = String(gasLimit);
		console.log(data);

		data[0] &&
			(await stakingContract.methods
				.claim(data)
				.send({
					gasLimit: String(totalGasLimit),
					gasPrice: "40000000000",
					from: account,
					to: CONFIG.STAKING_CONTRACT,
				})
				.then(() => {
					setMessage("You Have Claimed Your rewards successfully!");
					setTimeout(() => {
						setMessage("");
					}, 10000);
				}));
	};

	useEffect(() => {
		getConfig();
	}, []);

	useEffect(() => {
		getTokenIds();
	}, [tokenids]);

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	const onSubmit = ({ id }) => {
		if (id instanceof Array) {
			const ids = id.map((item) => parseInt(item));
			stakeNfts(ids);
		} else if (id == 0) {
			setMessage("Please select an NFT to stake!");
			setTimeout(() => {
				setMessage("");
			}, 5000);
		} else {
			const ids1 = [];
			ids1.push(parseInt(id));
			stakeNfts(ids1);
		}
	};

	const onSubmitUnstake = ({ id }) => {
		if (id instanceof Array) {
			const ids = id.map((item) => parseInt(item));
			unstakeNfts(ids);
		} else if (id == 0) {
			setMessage("Please select an NFT first!");
			setTimeout(() => {
				setMessage("");
			}, 5000);
		} else {
			const ids1 = [];
			ids1.push(parseInt(id));
			unstakeNfts(ids1);
		}
	};

	const onSubmitClaim = ({ id }) => {
		if (id instanceof Array) {
			const ids = id.map((item) => parseInt(item));
			claimRewards(ids);
		} else if (id == 0) {
			setMessage("Please select an NFT first!");
			setTimeout(() => {
				setMessage("");
			}, 5000);
		} else {
			const ids1 = [];
			ids1.push(parseInt(id));
			claimRewards(ids1);
		}
	};

	const i = [
		{
			id: 1,
			title: "Stake",
			content: (
				<form onSubmit={handleSubmit(onSubmit)}>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							flexDirection: "column",
						}}>
						<h5 className="text-white">CHOOSE FROM YOUR NFTS FOR STAKING</h5>

						{account ? (
							<>
								{/* {selected && <p className="text-danger">{message}</p>} */}
								<div className="text-info mb-3">
									You have {tokenids.length} NFT's to stake
								</div>
								<div className="StakeCardDeck row row-cols-2 row-cols-lg-6 g-2 g-lg-3">
									{tokenids.length > 0 &&
										tokenids.map((tokenid) => (
											<StakingCard
												id={tokenid}
												key={tokenid}
												register={register}
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
							<button className="button37 mr-4" onClick={approve}>
								Approve For All
							</button>
							<button type="submit" className="button37">
								Stake Your NFT
							</button>
						</div>
					</div>
				</form>
			),
		},

		{
			id: 2,
			title: "Claim",
			content: (
				<form onSubmit={handleSubmit(onSubmitClaim)}>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							flexDirection: "column",
						}}>
						<h5 className="text-white">
							CHOOSE FROM YOUR NFTS FOR CLAIMING REWARDS
						</h5>

						{account && (
							<div className=" StakeCardDeck row row-cols-2 row-cols-lg-6 g-2 g-lg-3">
								{stakedTokenids.map((Tokenid) => (
									<StakingCard key={Tokenid} id={Tokenid} register={register} />
								))}
							</div>
						)}
						{!account && (
							<p className="text-danger">
								No Nfts Found, Please Connect your wallet.
							</p>
						)}
						{account && stakedTokenids.length === 0 && (
							<div className="text-danger">
								You have not staked any NFT's, Please Stake First.
							</div>
						)}

						<div className="button-row mb-5">
							<button type="submit" className="button37">
								Claim Your Rewards
							</button>
						</div>
					</div>
				</form>
			),
		},

		{
			id: 3,
			title: "Unstake",
			content: (
				<form onSubmit={handleSubmit(onSubmitUnstake)}>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							flexDirection: "column",
						}}>
						<h5 className="text-white">CHOOSE FROM YOUR NFTS FOR UNSTAKING</h5>

						{account && (
							<div className=" StakeCardDeck row row-cols-2 row-cols-lg-6 g-2 g-lg-3">
								{stakedTokenids.map((Tokenid) => (
									<StakingCard key={Tokenid} id={Tokenid} register={register} />
								))}
							</div>
						)}
						{!account && (
							<p className="text-danger ">
								No Nfts Found, Please Connect your wallet.
							</p>
						)}
						{account && stakedTokenids.length === 0 && (
							<div className="text-danger">
								You have not staked any NFT's, Please Stake First.
							</div>
						)}

						<div className="button-row mb-5">
							<button type="submit" className="button37">
								Unstake and Get Your Rewards
							</button>
						</div>
					</div>
				</form>
			),
		},
	];

	return (
		<>
			<Navbar address={account} connect={connect} />
			<div className="stack-main">
				{message.length > 0 && (
					<div className="stakeMessage mb-5">{message}</div>
				)}
				<div className="btn-main bg-green">
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
									className="button37 hover"
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
		</>
	);
}

export default Staking;
