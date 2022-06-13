import React, { useState, useEffect } from "react";
import About from "../../components/About/About";
import Card from "../../components/card component/Card.component";
import Collection from "../../components/Collection.component/Collection";
import Community from "../../components/Community Component/Community";
import Faq from "../../components/FAQ/Faq";
import Footer from "../../components/Footer/Footer";
import Roadmap from "../../components/Roadmap/Roadmap";
import Team from "../../components/Team component/Team";
import Web3EthContract from "web3-eth-contract";
import Web3 from "web3";
import abi from "config/abi.json";

function HomePage() {
	const [account, setAccount] = useState("");
	const [smartContract, setSmartContract] = useState(null);
	const [web3data, setWeb3data] = useState();
	const [error, setError] = useState("");

	const [CONFIG, SET_CONFIG] = useState({
		CONTRACT_ADDRESS: "",
		NETWORK: {
			NAME: "Rinkeby Test Network",
			SYMBOL: "ETH",
			ID: 4,
		},
		NFT_NAME: "TEST",
		SYMBOL: "TEST",
		WEI_COST: 10000000000000000,
	});

	const { ethereum } = window;
	const metamaskIsInstalled = ethereum && ethereum.isMetaMask;

	if (ethereum) {
		ethereum.on("accountsChanged", (accounts) => {
			setAccount(accounts[0]);
		});

		ethereum.on("chainChanged", () => {
			window.location.reload();
		});
	}

	const getConfig = async () => {
		const configResponse = await fetch("/config/config.json", {
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
		});
		const config = await configResponse.json();
		SET_CONFIG(config);
	};

	useEffect(() => {
		getConfig();
	}, []);

	useEffect(() => {
		console.log(smartContract);
	}, [smartContract]);
	console.log(account);

	const connect = async () => {
		if (metamaskIsInstalled) {
			Web3EthContract.setProvider(ethereum);
			let web3 = new Web3(ethereum);
			try {
				const accounts = await ethereum.request({
					method: "eth_requestAccounts",
				});
				setAccount(accounts[0]);

				const networkId = await ethereum.request({
					method: "net_version",
				});
				alert("Connected to the wallet Successfully");

				if (networkId == CONFIG.NETWORK.ID) {
					const SmartContractObj = new web3.eth.Contract(
						abi,
						CONFIG.CONTRACT_ADDRESS
					);
					setSmartContract(SmartContractObj);
					setWeb3data(web3data);
				} else {
					setError(`Change network to ${CONFIG.NETWORK.NAME}.`);
				}
			} catch (error) {
				if (error.code === 4001) {
					alert(error.message);
				} else {
					console.error(error);
				}
				setError("Something went wrong.");
			}
		} else {
			setError("Install Metamask.");
			alert("You Gotta Install Metamask.");
		}
	};

	return (
		<div>
			{/* <div className="" style={{backgroundColor:"#1F2F4A"}}> */}
			{/* <Navbar /> */}
			<Collection
				connect={connect}
				account={account}
				smartContract={smartContract}
				CONFIG={CONFIG}
			/>
			{/* </div> */}
			<br />
			<Card />
			<br></br>
			<br></br>
			<About />
			<br />
			<Roadmap />
			<br></br>
			<br></br>
			<br></br>
			<br />
			<Team />
			<br />
			<Faq />
			<br />
			<Community />
			{/* <br /> */}
			<Footer />
		</div>
	);
}

export default HomePage;
