import React from "react";
import "./faq.css";
import QuestionOne from "./Question1";
function Faq() {
	return (
		<div className="container-fluid d-flex">
			<div className="col-6 text-left">
				<p>Easy Steps</p>
				<h2>
					Frequently Asked <br /> Questions
				</h2>
				<br />
				<br />
				<p>Dont Get Your Answer?</p>

				<p>
					Feel Free to Leave a message , <span> Ask Here</span>
				</p>
			</div>
			<div className="col-6">
				<QuestionOne />
				<br />
				<QuestionOne />
				<br />
				<QuestionOne />
				<br />
				<QuestionOne />
			</div>
		</div>
	);
}

export default Faq;
