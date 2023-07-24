// REACT
import React from "react";
// import { Link /*useLocation*/ } from "react-router-dom";
//Components
// import Buttons from "../Buttons/Buttons";
// import Logo from "../Logo/Logo";
// import SearchBar from '../SearchBar/SearchBar'
// import FilterByActivities from '../FilterByActivities/FilterByActivities'

// Styles
import styles from "./CountryBar.module.css";

//Routes
// import pathRoutes from "../../helpers/pathRoutes.helper";
import SearchBar from "../SearchBar/SearchBar";
// import OrderByPopulation from "../OrderByPopulation/OrderByPopulation";
// import OrderByName from "../OrderByName/OrderByName";
// import FilterByContinent from "../FilterByContinent/FilterByContinent";
import { useDispatch, useSelector } from "react-redux";
import {
	changePage,
	filterByActivity,
	filterByContinent,
	getAllCountries,
	orderCountriesByName,
	orderCountriesByPopulation,
} from "../../redux/actions";
import Filter from "../Filter/Filter";
import Order from "../Order/Order";

const CountryBar = () => {
	const dispatch = useDispatch();
	const allActivities = useSelector((state) => state.allActivities);
	const continents = [
		{ name: "Africa" },
		{ name: "Antarctica" },
		{ name: "Asia" },
		{ name: "Europe" },
		{ name: "North America" },
		{ name: "Oceania" },
		{ name: "South America" },
	];
	const orderByName = [
		{
			name: "Order by name",
			value: "allCountries",
		},
		{
			name: "A-Z",
			value: "Ascending",
		},
		{
			name: "Z-A",
			value: "Descending",
		},
	];
	const orderByPopulation = [
		{
			name: "Order by population",
			value: "allCountries",
		},
		{
			name: "Min-Max",
			value: "Ascending",
		},
		{
			name: "Max-Min",
			value: "Descending",
		},
	];
	const handleActivity = (e) => {
		e.preventDefault();
		e.target.value === "allActivities"
			? dispatch(getAllCountries())
			: dispatch(filterByActivity(e.target.value));
		// setOrder(e.target.value);
		dispatch(changePage(1));
	};
	const handleContinents = (e) => {
		e.preventDefault();
		dispatch(filterByContinent(e.target.value));
		dispatch(changePage(1));
	};

	const alphabeticallyOrder = (e) => {
		dispatch(orderCountriesByName(e.target.value));
		dispatch(changePage(1));
		
	};
	const populationOrder = (e) => {
		dispatch(orderCountriesByPopulation(e.target.value));
		dispatch(changePage(1));
		
	};
	return (
		<div className={styles.container}>
			<h2 className={styles.tittle}>Countries</h2>
			<div className={styles.CountryBar}>
				<SearchBar />
				<Filter
					handler={handleActivity}
					arr={allActivities}
					value='allActivities'
					name='All activities'
				/>
				<Filter
					handler={handleContinents}
					arr={continents}
					value='allCountries'
					name='All countries'
				/>
				<Order handler={alphabeticallyOrder} arr={orderByName} />
				<Order handler={populationOrder} arr={orderByPopulation} />
			</div>
		</div>
	);
};

export default CountryBar;
