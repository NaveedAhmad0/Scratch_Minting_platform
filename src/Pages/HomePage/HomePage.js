import React, { useState, useEffect } from "react";
import About from "../../components/About/About";
import Card from "../../components/card component/Card.component";
import Collection from "../../components/Collection.component/Collection";
import Community from "../../components/Community Component/Community";
import Faq from "../../components/FAQ/Faq";
import Footer from "../../components/Footer/Footer";
import Roadmap from "../../components/Roadmap/Roadmap";
import Team from "../../components/Team component/Team";
import { useContext } from "react";
import userContext from "../../context/userContext";

function HomePage() {
	const {connect,account,smartContract,CONFIG,getConfig}=useContext(userContext)

	useEffect(() => {
		getConfig();
	}, []);
    



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
