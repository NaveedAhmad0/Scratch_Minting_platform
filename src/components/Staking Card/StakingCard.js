import React from "react";
import { useEffect } from "react";
import { useState, useContext } from "react";
import userContext from "../../context/userContext";
import "./stakingCard.css";

function StakingCard({ id, register }) {
	const [selected, setSelected] = useState(false);

	return (
		// <div className={`cardStake ${selected ? "dark" : "light"}`}>
		// 	<img
		// 		src={`https://gateway.pinata.cloud/ipfs/QmVpaepvn3PyWYUjGM1aHvN7jGiYQTXftUnNWCU9odW8LT/${id}.png`}
		// 		alt=""
		// 		className="logoStake"
		// 	/>

		// 	<div className="card-btn1">
		// 		<input
		// 			type="checkbox"
		// 			className="checkbox"
		// 			value={id}
		// 			{...register("id")}
		// 			onChange={(e) => {
		// 				if (e.target.checked) {
		// 					setSelected(true);
		// 				} else {
		// 					setSelected(false);
		// 				}
		// 			}}></input>
		// 	</div>
		// </div>
		<div className={`card  ${selected ? "dark" : "light"}`}>
			<img
				className="card-img-top nftimage"
				src={`https://gateway.pinata.cloud/ipfs/QmSvt5KbmfmGzpr82wCMrWw36i4qZ1QaB4DpaztHshirxj/${id}.jpeg`}
				alt="Your NFTs"
			/>
			<div className="card-body">
				<p className="card-text" style={{ marginTop: "-33px" }}>
					Token-id : {id}
				</p>
				<input
					type="checkbox"
					className="checkbox"
					value={id}
					{...register("id")}
					onChange={(e) => {
						if (e.target.checked) {
							setSelected(true);
						} else {
							setSelected(false);
						}
					}}></input>
			</div>
		</div>
	);
}

export default StakingCard;