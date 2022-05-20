import { useState } from 'react'

function App() {

  const [selected, setSelected] = useState(null)

  const toggle = (i) => {
    if(selected === i) {
      return setSelected(null)
    }
    setSelected(i)
  }
  return (
    <div className="wrapper">
      <div className="accordian">
        {data.map((item, i) => (
          <div className='item'>
            <div className='title' onClick={() => toggle(i)}>
              <h3>{item.question}</h3>
              <span>{selected === i ? '-' : '+'}</span>
            </div>
            <div className={ selected === i ? 'content.show' : 'content'}><div className='content-ans'>{item.answer}</div></div>
          </div>
        ))}
      </div>
    </div>
  );
}

const data = [
  {
    question: 'What is Minting?',
    answer:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    question: 'How we can buy and invest NFT?',
    answer:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    question: 'Where we should choose Minting?',
    answer:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    question: 'Where we can buy and sell Minting?',
    answer:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    question: 'How secure is this token?',
    answer:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
]
export default App;


























// import React, { useState, useRef, useEffect } from "react";
// import { FiPlus } from "react-icons/fi";

// function QuestionOne() {
// 	const [active, setActive] = useState(false);

// 	const contentRef = useRef(null);

// 	useEffect(() => {
// 		contentRef.current.style.maxHeight = active
// 			? `${contentRef.current.scrollHeight}px`
// 			: "0px";
// 	}, [contentRef, active]);

// 	const toggleAccordion = () => {
// 		setActive(!active);
// 	};
// 	return (
// 		<div>
// 			<div>
// 				<button
// 					className={`question-section ${active}`}
// 					onClick={toggleAccordion}>
// 					<div>
// 						<div className="question-align">
// 							<h5 className="question-style" style={{ color: "black", paddingTop:"0px"}}>What is Minting? </h5>
// 							<FiPlus
// 								className={active ? `question-icon rotate` : `question-icon`}
// 							/>
// 						</div>
// 						<div
// 							ref={contentRef}
// 							className={active ? `answer answer-divider` : `answer`}>
// 							<p>
// 								Contrarytopopularbelief,Lorem Ipsum isnotsimplyrandom text.It
// 								hasrootsinapieceofclassicalLatinliteraturefrom 45BC,makingit
// 								over2000yearsold.RichardMcClintock,aLatinprofessorat
// 							</p>
// 						</div>
// 					</div>
// 				</button>
// 			</div>
// 		</div>
// 	);
// }

// export default QuestionOne;
