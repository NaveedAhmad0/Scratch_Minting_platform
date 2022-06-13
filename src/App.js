// import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./Pages/HomePage/HomePage";
import { Routes, Route } from "react-router-dom";
import Staking from "./Pages/Staking/stakingPage";
import ErrorPage from "./Pages/ErrorPage";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route exact path="/" element={<HomePage />} />
				<Route exact path="/staking" element={<Staking />} />

				{/* The below route should remain at the bottom of all route*/}
				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</div>
	);
}

export default App;
