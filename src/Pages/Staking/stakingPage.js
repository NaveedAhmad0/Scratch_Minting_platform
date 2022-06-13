import React from "react";
// import Navbar from "../../components/Navbar/navb";
import "./staking.css";
const VAULTABI = [
	{
		inputs: [
			{
				internalType: "contract Collection",
				name: "_nft",
				type: "address",
			},
			{
				internalType: "contract N2DRewards",
				name: "_token",
				type: "address",
			},
		],
		stateMutability: "nonpayable",
		type: "constructor",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "address",
				name: "owner",
				type: "address",
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount",
				type: "uint256",
			},
		],
		name: "Claimed",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "address",
				name: "owner",
				type: "address",
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "tokenId",
				type: "uint256",
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "value",
				type: "uint256",
			},
		],
		name: "NFTStaked",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "address",
				name: "owner",
				type: "address",
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "tokenId",
				type: "uint256",
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "value",
				type: "uint256",
			},
		],
		name: "NFTUnstaked",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "previousOwner",
				type: "address",
			},
			{
				indexed: true,
				internalType: "address",
				name: "newOwner",
				type: "address",
			},
		],
		name: "OwnershipTransferred",
		type: "event",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "account",
				type: "address",
			},
		],
		name: "balanceOf",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256[]",
				name: "tokenIds",
				type: "uint256[]",
			},
		],
		name: "claim",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "account",
				type: "address",
			},
			{
				internalType: "uint256[]",
				name: "tokenIds",
				type: "uint256[]",
			},
		],
		name: "claimForAddress",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256[]",
				name: "tokenIds",
				type: "uint256[]",
			},
		],
		name: "earningInfo",
		outputs: [
			{
				internalType: "uint256[1]",
				name: "info",
				type: "uint256[1]",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "",
				type: "address",
			},
			{
				internalType: "address",
				name: "from",
				type: "address",
			},
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
			{
				internalType: "bytes",
				name: "",
				type: "bytes",
			},
		],
		name: "onERC721Received",
		outputs: [
			{
				internalType: "bytes4",
				name: "",
				type: "bytes4",
			},
		],
		stateMutability: "pure",
		type: "function",
	},
	{
		inputs: [],
		name: "owner",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "renounceOwnership",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256[]",
				name: "tokenIds",
				type: "uint256[]",
			},
		],
		name: "stake",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "account",
				type: "address",
			},
		],
		name: "tokensOfOwner",
		outputs: [
			{
				internalType: "uint256[]",
				name: "ownerTokens",
				type: "uint256[]",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "totalStaked",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "newOwner",
				type: "address",
			},
		],
		name: "transferOwnership",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256[]",
				name: "tokenIds",
				type: "uint256[]",
			},
		],
		name: "unstake",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		name: "vault",
		outputs: [
			{
				internalType: "uint24",
				name: "tokenId",
				type: "uint24",
			},
			{
				internalType: "uint48",
				name: "timestamp",
				type: "uint48",
			},
			{
				internalType: "address",
				name: "owner",
				type: "address",
			},
		],
		stateMutability: "view",
		type: "function",
	},
];

var account = null;
var contract = null;
var vaultcontract = null;

const STAKINGCONTRACT = "0xe8DCcaB339512F86d052558C7515cEb10CDf480b";
const apikey = "33QYH2H847QF4WQMTXTM661GGVUKW1S9GM";
const endpoint = "https://api-rinkeby.etherscan.io/api";
const nftpng =
	"https://ipfs.io/ipfs/QmetESUb7wTPr8mBHWFsiSKMw6HTLWUGoL8DrkcaY9TTyh/";

async function stakeit() {
	var tokenids = Number(document.querySelector("[name=stkid]").value);
	vaultcontract.methods.stake([tokenids]).send({ from: account });
}

async function unstakeit() {
	var tokenids = Number(document.querySelector("[name=stkid]").value);
	vaultcontract.methods.unstake([tokenids]).send({ from: account });
}

function Staking() {
	return (
		<div className="">
			{/* <Navbar /> */}
			<div className="container-fluid modalBackground">
				<div className=" col-4 modalContainer">
					<div className="title text-white">
						<h1>Your Stake NFT</h1>
					</div>
					<div className="body">
						<p>Your Staked NFTs !</p>
					</div>
					<div>
						<button className="btn btn-success" onClick={stakeit}>
							Stake NFTs
						</button>
					</div>
				</div>
				{/* <br></br> */}
				<div className="col-4 modalContainer">
					<div className="title text-white">
						<h1>Your UnStake NFT</h1>
					</div>
					<div className="body">
						<p>Your UnStaked NFTs !</p>
					</div>
					<div>
						<button className="btn btn-success" onClick={unstakeit}>
							UnStake NFTs
						</button>
					</div>
				</div>
				{/* <br></br> */}
				<div className="col-4 modalContainer">
					<div className="title text-white">
						<h1>Your Claim Rewards</h1>
					</div>
					<div className="body">
						<p>Claim Your Rewards !</p>
					</div>
					<div>
						<button className="btn btn-success">Claim</button>
					</div>
					{/* <br></br> */}
				</div>
				{/* <div className="container"></div> */}
			</div>
		</div>
	);
}

export default Staking;
