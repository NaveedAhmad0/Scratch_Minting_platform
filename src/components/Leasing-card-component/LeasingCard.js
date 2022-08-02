import React from "react";

function LeasingCard({ id, title, image }) {
	return (
		<div className="card cardsdesign">
			<img
				className="card-img-top nftimage"
				src={
					id
						? `https://gateway.pinata.cloud/ipfs/QmVpaepvn3PyWYUjGM1aHvN7jGiYQTXftUnNWCU9odW8LT/${id}.png`
						: image
				}
				// src={image}
				alt="Card cap"
			/>
			<div className="card-body">
				<div className="d-flex justify-content-between">
					<div className="text-left">
						<h5 className="card-text">{title}</h5>
						<p className="card-text" style={{ marginTop: "-33px" }}>
							0.08 ETH 1/20
						</p>
						<p className="" style={{ color: "green" }}>
							Roboto Minting
						</p>
						<input type="checkbox" />
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
