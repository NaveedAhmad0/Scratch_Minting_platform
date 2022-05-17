import React, { useState, useRef, useEffect } from "react";
import { FiPlus } from "react-icons/fi";

function QuestionOne() {
	const [active, setActive] = useState(false);

	const contentRef = useRef(null);

	useEffect(() => {
		contentRef.current.style.maxHeight = active
			? `${contentRef.current.scrollHeight}px`
			: "0px";
	}, [contentRef, active]);

	const toggleAccordion = () => {
		setActive(!active);
	};
	return (
		<div>
			<div>
				<button
					className={`question-section ${active}`}
					onClick={toggleAccordion}>
					<div>
						<div className="question-align">
							<h5 className="question-style">What is Minting? </h5>
							<FiPlus
								className={active ? `question-icon rotate` : `question-icon`}
							/>
						</div>
						<div
							ref={contentRef}
							className={active ? `answer answer-divider` : `answer`}>
							<p>
								Contrarytopopularbelief,Lorem Ipsum isnotsimplyrandom text.It
								hasrootsinapieceofclassicalLatinliteraturefrom 45BC,makingit
								over2000yearsold.RichardMcClintock,aLatinprofessorat
							</p>
						</div>
					</div>
				</button>
			</div>
		</div>
	);
}

export default QuestionOne;
