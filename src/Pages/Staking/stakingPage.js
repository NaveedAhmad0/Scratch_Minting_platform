import React, { useState } from "react";
import Navbar from "../../components/Navbar/navb";
import "./staking.css";
import StakingCard from "../../components/Staking Card/StakingCard";
import { useEffect } from "react";
import { useContext } from "react";
import userContext from "../../context/userContext";
import { useForm } from "react-hook-form";

function Staking() {
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
			});
	};

	const stakeNfts = async (data) => {
		let gasLimit = CONFIG.GAS_LIMIT;
		let totalGasLimit = String(gasLimit);
		console.log(data);

		data[0] &&
			(await stakingContract.methods.stake(data).send({
				gasLimit: String(totalGasLimit),
				gasPrice: "40000000000",
				from: account,
				to: CONFIG.STAKING_CONTRACT,
			}));
	};

	const unstakeNfts = async (data) => {
		let gasLimit = CONFIG.GAS_LIMIT;
		let totalGasLimit = String(gasLimit);
		console.log(data);

		data[0] &&
			(await stakingContract.methods.unstake(data).send({
				gasLimit: String(totalGasLimit),
				gasPrice: "40000000000",
				from: account,
				to: CONFIG.STAKING_CONTRACT,
			}));
	};

	const claimRewards = async (data) => {
		let gasLimit = CONFIG.GAS_LIMIT;
		let totalGasLimit = String(gasLimit);
		console.log(data);

		data[0] &&
			(await stakingContract.methods.claim(data).send({
				gasLimit: String(totalGasLimit),
				gasPrice: "40000000000",
				from: account,
				to: CONFIG.STAKING_CONTRACT,
			}));
	};

	useEffect(() => {
		getConfig();
	}, []);

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
						<h5>CHOOSE FROM YOUR NFTS FOR STAKING</h5>

						<div className="row row-cols-2 row-cols-lg-6 g-2 g-lg-3">
							{tokenids.length > 0 &&
								tokenids.map((tokenid) => (
									<StakingCard id={tokenid} key={tokenid} register={register} />
								))}
						</div>

						<div className="button-row">
							<button className="button37 mr-4" onClick={approve}>
								Approve
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
						<h5>CHOOSE FROM YOUR NFTS FOR CLAIMING REWARDS</h5>

						<div className="row row-cols-2 row-cols-lg-6 g-2 g-lg-3">
							{stakedTokenids.map((Tokenid) => (
								<StakingCard key={Tokenid} id={Tokenid} register={register} />
							))}
						</div>

						<div className="button-row">
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
						<h5>CHOOSE FROM YOUR NFTS FOR UNSTAKING</h5>

						<div className="row row-cols-2 row-cols-lg-6 g-2 g-lg-3">
							{stakedTokenids.map((Tokenid) => (
								<StakingCard key={Tokenid} id={Tokenid} register={register} />
							))}
						</div>

						<div className="button-row">
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
		<div className="stack-main">
			<Navbar address={account} connect={connect} />
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
			<div>{currentTab.content}</div>
		</div>
	);
}

export default Staking;
