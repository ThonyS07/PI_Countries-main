//? React
import { Routes, Route, useLocation } from "react-router-dom";

//? Rooutes
import pathRoutes from "./helpers/pathRoutes.helper";

//? styles
import "./App.css";

//?Components
import Countries from "./components/Countries/Countries";
import Activities from "./components/Activities/Activities";

import Landing from "./components/Landing/Landing";
import NavBar from "./components/NavBar/NavBar";
import CountryDetails from "./components/CountryDetails/CountryDetails";
import AddActivity from "./components/AddActivity/AddActivity";

function App() {
	const { pathname } = useLocation();
	return (
		<div className='App'>
			{pathname !== "/" && <NavBar />}

			<Routes>
				<Route path={"/"} element={<Landing />} />				
				<Route path={pathRoutes.COUNTRIES} element={<Countries />}></Route>
				<Route path={pathRoutes.ACTIVITIES} element={<Activities />}></Route>
				<Route path={pathRoutes.COUNTRY_DETAILS + ':id'} element={<CountryDetails />}></Route>
				<Route path={pathRoutes.ADD_ACTIVITIES} element={<AddActivity />}></Route>
			</Routes>
		</div>
	);
}

export default App;
