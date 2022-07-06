import React, { useEffect } from "react";
import { useContext } from "react";

//components
import About from "../../components/About/About";
import Card from "../../components/card component/Card.component";
import Collection from "../../components/Collection.component/Collection";
import Community from "../../components/Community Component/Community";
import Faq from "../../components/FAQ/Faq";
import Footer from "../../components/Footer/Footer";
import Roadmap from "../../components/Roadmap/Roadmap";
import Team from "../../components/Team component/Team";
import userContext from "../../context/userContext";
import Video from "../../components/Teaser/video";

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
			<Video />
			<br />
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
