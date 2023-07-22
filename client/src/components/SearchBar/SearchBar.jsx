// import React, { useState} from "react";
// import styles from "./SearchBar.module.css";
// import {
// 	changePage,
// 	// filterByActivity,
// 	searchCountry,
// } from "../../redux/actions";
// import { useDispatch, useSelector } from "react-redux";
// // import { countryBackUp } from "../../redux/reducer";

// const SearchBar = () => {
// 	// const [searchOption, setSearchOption] = useState("Busqueda por nombre");
// 	const [searchValue, setSearchValue] = useState("");
// 	const dispatch = useDispatch();

// const handleSubmit = (e) => {
// 	e.preventDefault()
// 	dispatch(searchCountry(searchValue))
// 	setSearchValue("");

// };

// 	const handleSearchInputChange = (e) => {
// 		e.preventDefault()
// 		setSearchValue(e.target.value)
// 		console.log(searchValue)

// 	};

// 	return (
// 		<div className={styles.searchBar}>
// 			<input
// 				className={styles.input}
// 				type='search'
// 				value={searchValue}
// 				onChange={handleSearchInputChange}
// 			/>

// 			<button className={styles.searchButton} onClick={handleSubmit}>
// 				Buscar
// 			</button>
// 		</div>
// 	);
// };

import React, { useState } from "react";
import styles from "./SearchBar.module.css";
import {
	changePage,
	// filterByActivity,
	searchCountry,
} from "../../redux/actions";
import { useDispatch } from "react-redux";
import lupa from "../../assets/img/lupa.png";
// import { countryBackUp } from "../../redux/reducer";

const SearchBar = () => {
	// const [searchOption, setSearchOption] = useState("Busqueda por nombre");
	const [searchValue, setSearchValue] = useState("");
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		// if (searchOption === "Busqueda por nombre") {
		dispatch(searchCountry(searchValue));

		// } else {
		// 	dispatch(filterByActivity(searchValue));
		// }
		setSearchValue("");
		dispatch(changePage(1));
	};
	// const handleSearchOptionChange = (e) => {
	// 	e.preventDefault();
	// 	setSearchOption(e.target.value);
	// };

	const handleSearchInputChange = (e) => {
		setSearchValue(e.target.value);
	};

	return (
		<div className={styles.searchBar}>
			<input
				className={styles.input}
				type='search'
				value={searchValue}
				onChange={handleSearchInputChange}
				placeholder="Name..."
			/>
			{/* <select value={searchOption} onChange={handleSearchOptionChange}>
				<option value='Busqueda por nombre'>Busqueda por nombre</option>
				<option value='Busqueda por Actividades'>
					Busqueda por Actividades
				</option>
			</select> */}
			<button className={styles.searchButton} onClick={handleSubmit}>
				<img src={lupa} alt='busqueda' />
			</button>
		</div>
	);
};

// export default SearchBar;

export default SearchBar;
