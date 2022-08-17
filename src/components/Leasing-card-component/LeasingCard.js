import React, { useState } from "react";

function LeasingCard({ id, title, image, register }) {
	const [selected, setSelected] = useState(false);
	// console.log(selected);
	// console.log("price", id);
	let nftPrice;
	if (id <= 10) {
		nftPrice = "0.26";
	} else {
		nftPrice = "0.13";
	}

	return (
		<div className={`card cardsdesign ${selected ? "dark" : "light"}`}>
			<img
				className="card-img-top nftimage"
				src={
					// id
					// ?
					`https://gateway.pinata.cloud/ipfs/QmSvt5KbmfmGzpr82wCMrWw36i4qZ1QaB4DpaztHshirxj/${id}.jpeg`
					// : image
				}
				// src={image}
				alt="Card cap"
			/>
			<div className="card-body">
				<div className="d-flex justify-content-between">
					<div className="text-left">
						<h5 className="card-text">{title}</h5>
						<p className="card-text" style={{ marginTop: "-33px" }}>
							{nftPrice} ETH | Token-id : {id}
						</p>
						<p className="" style={{ color: "green" }}>
							Roboto Minting
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
					<div className="text-right">
						<div class="dropdown">
							<h3>...</h3>
							<div class="dropdown-content">
								<a href="#rent">Rent</a>
								<br />
								<a href="#rent">Copylink</a>
								<br />
								<a href="#rent">ViewonOpenSea</a>
								<br />
								<a href="#rent">ViewonRerible</a>
								<br />
							</div>
						</div>
						<br></br>
						<br></br>
						<i
							style={{
								color: "white",
								paddingLeft: "1rem",
								fontSize: "12px",
							}}
							class="fas fa-heart">
							{" "}
							94
						</i>
					</div>
				</div>
			</div>
		</div>
	);
}

export default LeasingCard;