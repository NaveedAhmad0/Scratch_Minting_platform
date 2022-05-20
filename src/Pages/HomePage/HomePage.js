import React from "react";
import About from "../../components/About/About";
import Card from "../../components/card component/Card.component";
import Collection from "../../components/Collection.component/Collection";
import Community from "../../components/Community Component/Community";
import Faq from "../../components/FAQ/Faq";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/navb";
import Roadmap from "../../components/Roadmap/Roadmap";
import Team from "../../components/Team component/Team";

function HomePage() {
	return (
		<div>
			{/* <div className="" style={{backgroundColor:"#1F2F4A"}}> */}
			{/* <Navbar /> */}
			<Collection />
			{/* </div> */}
			<br />
			<Card />
			<About />
			<br />
			<Roadmap />
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
