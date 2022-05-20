import React from "react";
import "./community.css";
function Community() {
	return (
		<div className="container-fluid community mt-5">
			<h1>
				<span style={{color:"green"}}>Join Our</span> Community & get early access
			</h1>
			<p>
				Contrary to popular belief, Lorem Ipsum is not simply random text. It{" "}
				<br />
				has roots in a piece of classical Latin literature.
			</p>
			<br />
			<button className="btn join-btn btn-success">Join Now</button>
		</div>
	);
}

export default Community;
