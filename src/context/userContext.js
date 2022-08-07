import { useState, createContext } from "react";
import Web3EthContract from "web3-eth-contract";
import Web3 from "web3";
import abi from "config/abi.json";
import abi2 from "config/NFTSTAKINGabi.json";
import abi3 from "config/RentalAbi.json";
import { useEffect } from "react";

const userContext = createContext();

export const UserProvider = ({ children }) => {
	const [account, setAccount] = useState("");
	const [smartContract, setSmartContract] = useState(null);
	const [stakingContract, setStakingContract] = useState(null);
	const [rentalContract, setRentalContract] = useState(null);
	const [web3data, setWeb3data] = useState();
	const [error, setError] = useState("");
	const [tokenids, setTokenids] = useState([]);
	const [stakedTokenids, setStakedTokenids] = useState([]);
	const [depositedTokenids, setDepositedTokenids] = useState([]);
	const [onRentTokenids, setOnRentTokenids] = useState([]);
	const [onLeaseTokenids, setOnLeaseTokenids] = useState([]);

	const [CONFIG, SET_CONFIG] = useState({
		CONTRACT_ADDRESS: "",
		STAKING_CONTRACT: "",
		RENTAL_CONTRACT: "",
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
				// console.log("clicked");
				// console.log(networkId == CONFIG.NETWORK.ID);
				// console.log(networkId);
				if (networkId == CONFIG.NETWORK.ID) {
					const SmartContractObj = new web3.eth.Contract(
						abi,
						CONFIG.CONTRACT_ADDRESS
					);
					const SmartContractObj2 = new web3.eth.Contract(
						abi2,
						CONFIG.STAKING_CONTRACT
					);
					const SmartContractObj3 = new web3.eth.Contract(
						abi3,
						CONFIG.RENTAL_CONTRACT
					);
					setSmartContract(SmartContractObj);
					setStakingContract(SmartContractObj2);
					setRentalContract(SmartContractObj3);
					console.log(SmartContractObj);
					console.log(SmartContractObj2);
					console.log(SmartContractObj3);
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

	const getTokenIds = async () => {
		await smartContract.methods
			.walletOfOwner(account)
			.call()
			.then((res) => {
				setTokenids(res.map((item) => parseInt(item)));
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const getStakedTokenIds = async () => {
		await stakingContract.methods
			.tokensOfOwner(account)
			.call()
			.then((res) => {
				setStakedTokenids(res.map((item) => parseInt(item)));
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const getLeaseAvailableToken = async () => {
		await rentalContract.methods
			.tokensAvailableForLease()
			.call()
			.then((res) => {
				setDepositedTokenids(res.map((item) => parseInt(item)));
			})
			.catch((error) => {
				console.log(error);
			});
	};
	const getOnLeaseToken = async () => {
		await rentalContract.methods
			.tokensOfOwner(account)
			.call()
			.then((res) => {
				setOnLeaseTokenids(res.map((item) => parseInt(item)));
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const getRentedTokenIds = async () => {
		await rentalContract.methods
			.rentalTokensOfOwner(account)
			.call()
			.then((res) => {
				setOnRentTokenids(res.map((item) => parseInt(item)));
			})
			.catch((error) => {
				console.log(error);
			});
	};

	useEffect(() => {
		if (smartContract != "" && account !== "") {
			getTokenIds();
			getStakedTokenIds();
			getLeaseAvailableToken();
			getRentedTokenIds();
			getOnLeaseToken();
		}
	}, [smartContract]);

	return (
		<userContext.Provider
			value={{
				connect,
				account,
				smartContract,
				stakingContract,
				rentalContract,
				web3data,
				error,
				getConfig,
				CONFIG,
				depositedTokenids,
				tokenids,
				stakedTokenids,
				onRentTokenids,
				onLeaseTokenids,
				getTokenIds,
				getStakedTokenIds,
			}}>
			{children}
		</userContext.Provider>
	);
};

export default userContext;
