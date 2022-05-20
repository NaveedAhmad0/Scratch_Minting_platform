import React from "react";
import "./faq.css";
import QuestionOne from "./Question1";
function Faq() {
	return (
		<div id="faq" className="container d-flex">
			<div className="col-6 text-left faq-style">
				<p><span style={{color:"green"}}>Easy</span> Steps</p>
				<h1 style={{marginLeft:"-15%", fontSize:"2.5rem"}}>
					<span style={{color:"green"}}>Frequently</span> Asked <br /> Questions
				</h1>
				<br />
				<br />
				<p>Don't get your Answer?</p>

				<p>
					Feel Free to leave a message, <span style={{color:"green"}}>Ask Here!</span>
				</p>
			</div>
			<div className="col-6">
				<QuestionOne />
				{/* <br />
				<QuestionOne />
				<br />
				<QuestionOne />
				<br />
				<QuestionOne /> */}
			</div>
		</div>
	);
}

export default Faq;
