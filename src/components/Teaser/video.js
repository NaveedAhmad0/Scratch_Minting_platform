import React from "react";
import Teaser from "../../assets/teaser.mp4";

const Video = () => {
	return (
		<>
			<video width="auto" height="50%" controls autoPlay muted>
				<source src={Teaser} type="Video/mp4" />
			</video>
		</>
	);
};

export default Video;
