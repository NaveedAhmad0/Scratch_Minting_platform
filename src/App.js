// import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./Pages/HomePage/HomePage";
import { Routes, Route } from "react-router-dom";
import Leasing from "./components/LeasingComponent/leasing";
import Staking from "./Pages/Staking/stakingPage";
import ErrorPage from "./Pages/ErrorPage";
// import {useState} from 'react'
import { UserProvider } from "./context/userContext";

function App() {
	return (
		<UserProvider>
			<div className="App">
				<Routes>
					<Route index element={<HomePage />} />
					<Route path="/staking" element={<Staking />} />
					<Route path="/leasing" element={<Leasing />} />
					{/* The below route should remain at the bottom of all route*/}
					<Route path="*" element={<ErrorPage />} />
				</Routes>
			</div>
		</UserProvider>
	);
}

export default App;
