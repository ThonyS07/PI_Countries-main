import './App.css';
import NavBar from './components/NavBar/NavBar'
import { Routes, Route} from "react-router-dom";
import pathRoutes from './helpers/pathRoutes.helper';
import Countries from './components/Countries/Countries'
import Activities from './components/Activities/Activities'
import Home from './components/Home/Home'

function App() {
//   const { pathname } = useLocation();
  return (
		<div className='App'>
			{/* <div>{pathname === "/" && <NavBar />}</div> */}
			<Routes>
				<Route path={"/"} element={<NavBar/>} />
				<Route
					path={pathRoutes.HOME} element={<Home/>}></Route>
				<Route path={pathRoutes.COUNTRIES} element={<Countries />}></Route>
				<Route path={pathRoutes.ACTIVITIES} element={<Activities />}></Route>
			</Routes>
		</div>
	);
}

export default App;
