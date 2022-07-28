import React from "react";
import Teaser from "../../assets/teaser.mp4";
import "./video.css"

const Video = () => {
	return (
		<>
		<div id="videroboto" className="text-white"  style={{fontSize:"3.3vw",fontWeight:"900",}}><span style={{color:' #4CAF50',paddingRight:"0.7rem"}}>WHO</span>WE ARE</div>
		{/* <br></br>
		<br></br>
		<br></br>
		<br></br> */}
		<div id="mystylevideo">
			<video className="video" style={{marginTop:"10%",border:"solid 7px white"}} width="auto" height="50%" controls autoPlay muted>
				<source src={Teaser} type="Video/mp4" />
			</video>
		</div>
		</>
	);
};

export default Video;
