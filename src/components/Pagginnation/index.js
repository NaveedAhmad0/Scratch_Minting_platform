import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./styles.css";
// import image1 from "../../../src/images/nft1.jpeg";
// import image1 from "../../../"
import image1 from "../../assets/4.jpeg";
import image2 from "../../assets/2.jpeg";
import image3 from "../../assets/5.jpeg";
import image4 from "../../assets/3.jpeg";
import image5 from "../../../src/images/nft1.jpeg";
const breakPoints = [
	{ width: 1, itemsToShow: 1 },
	{ width: 550, itemsToShow: 2 },
	{ width: 768, itemsToShow: 3 },
	{ width: 1200, itemsToShow: 4 },
];

function Pagination() {
	return (
		<div className="Container12 pag123 text-center">
			<div className="paginnationcom">
				<h1 className="paginnationcom1 text-center">
					<span style={{ color: "#61A62D" }}>CRAZY </span>{" "}
					<span style={{ color: "white" }}>MINTING NFTs</span>
					{/* <span style={{ color: "white" }}>NFTs</span> */}
				</h1>
			</div>
			<Carousel breakPoints={breakPoints} pagination={false} mode="gallery">
				<Item>
					<img src={image1} className="image" alt="" style={{ height: 250 }} />
				</Item>
				<Item>
					<img src={image2} className="image" alt="" style={{ height: 250 }} />
				</Item>
				<Item>
					<img src={image3} className="image" alt="" style={{ height: 250 }} />
				</Item>
				<Item>
					<img src={image4} className="image" alt="" style={{ height: 250 }} />
				</Item>
				<Item>
					<img src={image5} className="image" alt="" style={{ height: 250 }} />
				</Item>
				<Item>
					<img src={image1} className="image" alt="" style={{ height: 250 }} />
				</Item>
				<Item>
					<img src={image2} className="image" alt="" style={{ height: 250 }} />
				</Item>
				<Item>
					<img src={image3} className="image" alt="" style={{ height: 250 }} />
				</Item>
			</Carousel>
		</div>
	);
}

export default Pagination;
