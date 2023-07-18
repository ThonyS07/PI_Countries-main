// REACT
import React from "react";
import { Link /*useLocation*/ } from "react-router-dom";
//Components
import Buttons from "../Buttons/Buttons";
import Logo from "../Logo/Logo";
// import SearchBar from '../SearchBar/SearchBar'

// Styles
import styles from "./CountryBar.module.css";

//Routes
import pathRoutes from "../../helpers/pathRoutes.helper";
import SearchBar from "../SearchBar/SearchBar";
import OrderByPopulation from "../OrderByPopulation/OrderByPopulation";
import OrderByName from "../OrderByName/OrderByName";
import FilterByActivities from "../FilterByActivities/FilterByActivities";
import FilterByContinent from "../FilterByContinent/FilterByContinent";
import { useSelector } from "react-redux";
const CountryBar = () => {
	const activities = useSelector((state) => state.allActivities);
	// const { pathname } = useLocation();
	return (
		<div className={styles.CountryBar}>
			<Link className={styles.link} to={pathRoutes.COUNTRIES}>
				<Logo />
			</Link>
			<div className={styles.buttonsWrapper}>
				<Link className={styles.link} to={pathRoutes.COUNTRIES}>
					Countries
				</Link>
				<Link className={styles.link} to={pathRoutes.ACTIVITIES}>
					Activities
				</Link>
			</div>
			<SearchBar
				// findCountry={findCountry}
				// handleSearchInputChange={handleSearchInputChange}
				// searchValue={searchValue}
			/>
			<OrderByPopulation />
			<OrderByName />
			<FilterByActivities activities={activities} />
			<FilterByContinent />
			<Buttons buttonName={"Login"} />
		</div>
	);
};

export default CountryBar;
