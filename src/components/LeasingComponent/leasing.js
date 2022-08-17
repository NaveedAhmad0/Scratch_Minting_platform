import React, { useEffect } from "react";
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
import { useForm } from "react-hook-form";

const Leasing = () => {
	const [currentTab, setCurrentTab] = useState("");
	const [selected, setSelected] = useState(false);
	const [message, setMessage] = useState("");
	const {
		connect,
		account,
		smartContract,
		rentalContract,
		depositedTokenids,
		onRentTokenids,
		onLeaseTokenids,
		tokenids,
		deposited,
		setDeposited,
		rented,
		setRented,
		returned,
		setReturned,
		CONFIG,
	} = useContext(userContext);

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	const approve = async () => {
		let gasLimit = CONFIG.GAS_LIMIT;
		let totalGasLimit = String(gasLimit);

		await smartContract.methods
			.setApprovalForAll(CONFIG.RENTAL_CONTRACT, true)
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

	const DepositNfts = async (data) => {
		let gasLimit = CONFIG.GAS_LIMIT;
		let totalGasLimit = String(gasLimit);
		console.log(data);
		if (data.length > 1) {
			return alert("Please select one NFT only!");
		}
		data[0] &&
			(await rentalContract.methods
				.depositNft(data)
				.send({
					gasLimit: String(totalGasLimit),
					gasPrice: "40000000000",
					from: account,
					to: CONFIG.RENTAL_CONTRACT,
				})
				.then(() => {
					setMessage("Congrats ,You Have Deposited Your NFT Successfully!");
					setTimeout(() => {
						setMessage("");
					}, 10000);
					setDeposited(!deposited);
				})
				.catch((error) => {
					if (error.code === 4001) {
						alert(error.message);
					}
					console.log(error);
				}));
	};
	const RentNfts = async (data) => {
		let gasLimit = CONFIG.GAS_LIMIT;
		let totalGasLimit = String(gasLimit);
		console.log("data is", data);
		console.log("data length is", data.length);
		console.log("data total price is", data.length * CONFIG.REGULAR_NFT_PRICE);

		let price;
		if (depositedTokenids.some((e) => e <= 10)) {
			price = data.length * CONFIG.PREMIUM_NFT_PRICE;
			console.log("non regular");
		}
		if (depositedTokenids.some((e) => e > 10)) {
			price = data.length * CONFIG.REGULAR_NFT_PRICE;
			console.log("regular");
		}
		console.log("price =", price);
		if (data.length > 1) {
			return alert("Please select one NFT only!");
		}
		data[0] &&
			(await rentalContract.methods
				.depositEth(data)
				.send({
					gasLimit: String(totalGasLimit),
					gasPrice: "40000000000",
					value: price,
					from: account,
					to: CONFIG.RENTAL_CONTRACT,
				})
				.then(() => {
					setMessage("Congrats ,You Have Rented an NFT Successfully!");
					setTimeout(() => {
						setMessage("");
					}, 10000);
					setRented(!rented);
				})
				.catch((error) => {
					if (error.code === 4001) {
						alert(error.message);
					}
					console.log(error);
				}));
		// console.log("data is", data[0]);
	};
	const ReturnNfts = async (data) => {
		let gasLimit = CONFIG.GAS_LIMIT;
		let totalGasLimit = String(gasLimit);
		console.log(data);
		if (data.length > 1) {
			return alert("Please select one NFT only!");
		}
		data[0] &&
			(await rentalContract.methods
				.returnNft(data)
				.send({
					gasLimit: String(totalGasLimit),
					gasPrice: "40000000000",
					from: account,
					to: CONFIG.RENTAL_CONTRACT,
				})
				.then(() => {
					setMessage("Congrats ,You Have Returned Your NFT Successfully!");
					setTimeout(() => {
						setMessage("");
					}, 10000);
					setReturned(!returned);
				})
				.catch((error) => {
					if (error.code === 4001) {
						alert(error.message);
					}
					console.log(error);
				}));
		// console.log("data is", data[0]);
	};
	const WithdrawCollateral = async (data) => {
		let gasLimit = CONFIG.GAS_LIMIT;
		let totalGasLimit = String(gasLimit);
		console.log(data);

		data[0] &&
			(await rentalContract.methods
				.withdrawCollateral(data)
				.send({
					gasLimit: String(totalGasLimit),
					gasPrice: "40000000000",
					from: account,
					to: CONFIG.RENTAL_CONTRACT,
				})
				.then(() => {
					setMessage(
						"Congrats ,You Have Withdrawn Your Collateral Successfully!"
					);
					setTimeout(() => {
						setMessage("");
					}, 10000);
				})
				.catch((error) => {
					if (error.code === 4001) {
						alert(error.message);
					}
					console.log(error);
				}));
		// console.log("data is", data[0]);
	};

	const onSubmit = ({ id }) => {
		if (id instanceof Array) {
			const ids = id.map((item) => parseInt(item));
			DepositNfts(ids);
		} else if (id == 0) {
			setMessage("Please select an NFT to stake!");
			setTimeout(() => {
				setMessage("");
			}, 5000);
		} else {
			const ids1 = [];
			ids1.push(parseInt(id));
			DepositNfts(ids1);
		}
	};

	const onSubmitRent = ({ id }) => {
		if (id instanceof Array) {
			const ids = id.map((item) => parseInt(item));
			RentNfts(ids);
		} else if (id == 0) {
			setMessage("Please select an NFT first!");
			setTimeout(() => {
				setMessage("");
			}, 5000);
		} else {
			const ids1 = [];
			ids1.push(parseInt(id));
			RentNfts(ids1);
		}
	};
	const onSubmitReturn = ({ id }) => {
		if (id instanceof Array) {
			const ids = id.map((item) => parseInt(item));
			ReturnNfts(ids);
		} else if (id == 0) {
			setMessage("Please select an NFT first!");
			setTimeout(() => {
				setMessage("");
			}, 5000);
		} else {
			const ids1 = [];
			ids1.push(parseInt(id));
			ReturnNfts(ids1);
		}
	};
	const onSubmitWithdrawCollateral = ({ id }) => {
		if (id instanceof Array) {
			const ids = id.map((item) => parseInt(item));
			WithdrawCollateral(ids);
		} else if (id == 0) {
			setMessage("Please select an NFT first!");
			setTimeout(() => {
				setMessage("");
			}, 5000);
		} else {
			const ids1 = [];
			ids1.push(parseInt(id));
			WithdrawCollateral(ids1);
		}
	};

	// console.log(rentalContract);

	const i = [
		{
			id: 1,
			title: "Deposit NFT",
			content: (
				<>
					<form onSubmit={handleSubmit(onSubmit)}>
						<div
							style={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								flexDirection: "column",
							}}>
							<h5 className="text-white">
								CHOOSE FROM YOUR NFTS TO DEPOSIT FOR RENT
							</h5>

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
									Deposit Your NFT
								</button>
							</div>
							<br />
							{onLeaseTokenids.length > 0 && (
								<>
									<h2 className="text-white">
										BELOW ARE THE TOKENS YOU HAVE GIVEN ON LEASE!
									</h2>
									<div className=" cardDdeck mt-5">
										{onLeaseTokenids.length > 0 &&
											onLeaseTokenids.map((tokenid) => (
												<LeasingCard
													id={tokenid}
													key={tokenid}
													register={register}
												/>
											))}
									</div>
									<div className="button-row mb-5">
										<button
											className="button37"
											onClick={handleSubmit(onSubmitWithdrawCollateral)}>
											Withdraw Collateral
										</button>
									</div>
								</>
							)}
						</div>
					</form>
				</>
			),
		},

		{
			id: 2,
			title: "Rent",
			content: (
				<form onSubmit={handleSubmit(onSubmitRent)}>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							flexDirection: "column",
						}}>
						<h5 className="text-white">CHOOSE THE NFT YOU WANT TO RENT</h5>

						{account && (
							<div className="cardDdeck">
								{depositedTokenids.map((Tokenid) => (
									<LeasingCard register={register} key={Tokenid} id={Tokenid} />
								))}
							</div>
						)}
						{!account && (
							<p className="text-danger">
								No Nfts Found, Please Connect your wallet.
							</p>
						)}
						{account && depositedTokenids.length === 0 && (
							<div className="text-danger">No NFT's available for rent!</div>
						)}

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
				<form onSubmit={handleSubmit(onSubmitReturn)}>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							flexDirection: "column",
						}}>
						<h5 className="text-white">CHOOSE AN NFT TO RETURN</h5>

						{account && (
							<div className="cardDdeck">
								{onRentTokenids.map((Tokenid) => (
									<LeasingCard
										image={Nftimg}
										register={register}
										id={Tokenid}
									/>
								))}
							</div>
						)}
						{!account && (
							<p className="text-danger">
								No Nfts Found, Please Connect your wallet.
							</p>
						)}
						{account && onRentTokenids.length === 0 && (
							<div className="text-danger">
								You don't have any rented NFT's.
							</div>
						)}

						<div className="button-row mb-5">
							<button className="button37 mr-4" onClick={approve}>
								Approve For All
							</button>
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
		<>
			<Navbar connect={connect} address={account} />
			<div className="lease-main">
				{message.length > 0 && (
					<div className="leaseMessage m-auto mb-5">{message}</div>
				)}
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
		</>
	);
};

export default Leasing;

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