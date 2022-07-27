import React, { useEffect } from "react";
import { useContext } from "react";

//components
import About from "../../components/About/About";
import Card from "../../components/card component/Card.component";
import Collection from "../../components/Collection.component/Collection";
import Community from "../../components/Community Component/Community";
import Footer from "../../components/Footer/Footer";
import Roadmap from "../../components/Roadmap/Roadmap";
import userContext from "../../context/userContext";
import Video from "../../components/Teaser/video";
import CardsonConnect from "../../components/cardsonConnect/cardsconnect";
import Paggination from "../../components/Pagginnation/index";

function HomePage() {
	const { connect, account, smartContract, CONFIG, error, getConfig } =
		useContext(userContext);

	useEffect(() => {
		getConfig();
	}, []);

	useEffect(() => {
		if (error) {
			alert(error);
			console.log(error);
		}
	}, [error]);

	return (
		<div>
			<Collection
				connect={connect}
				account={account}
				smartContract={smartContract}
				CONFIG={CONFIG}
			/>
			<About />
			<Video />
			<br />
			<br />
			<br />
			<Paggination />
			<br></br>
			{/* <Roadmap /> */}
			<br></br>
			<br></br>
			<CardsonConnect />
			<br />
			<br />
			<br />
			<Roadmap />
			{/* <br /> */}
			<Community />
			{/* <br /> */}
			<Footer />
		</div>
	);
}

export default HomePage;
