import React, { useState} from "react";
import styles from "./SearchBar.module.css";
import {
	changePage,
	filterByActivity,
	searchCountry,
} from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
// import { countryBackUp } from "../../redux/reducer";

const SearchBar = () => {
	const [searchOption, setSearchOption] = useState("Busqueda por nombre");
	const [searchValue, setSearchValue] = useState("");
	const dispatch = useDispatch();
	const countryBackUp = useSelector(state => state.countryBackUp);

	
	const findCountry = () => {
		const filtrado = countryBackUp.filter((countries) =>
			countries.name.toUpperCase() === (searchValue.toUpperCase())
		);
        if(!filtrado.length){
            return alert('No se encontró el pais solicitado')
        }
        dispatch(changePage(1))
        dispatch(searchCountry(searchValue))
	};

	const handleSearchOptionChange = (e) => {
		e.preventDefault();
		setSearchOption(e.target.value);
	};

	const handleSearchInputChange = (e) => {
		
		setSearchValue(e.target.value);
	};

	const handleSearch = () => {
		if (searchOption === "Busqueda por nombre") { findCountry() } else {
			dispatch(changePage(1));
			dispatch(filterByActivity(searchValue));
		};
	}
		return (
			<div className={styles.searchBar}>
				<input
					className={styles.input}
					type='search'
					value={searchValue}
					onChange={handleSearchInputChange}
				/>
				<select value={searchOption} onChange={handleSearchOptionChange}>
					<option value='Busqueda por nombre'>Busqueda por nombre</option>
					<option value='Busqueda por Actividades'>
						Busqueda por Actividades
					</option>
				</select>
				<button className={styles.searchButton} onClick={handleSearch}>
					Buscar
				</button>
			</div>
		);
	};


export default SearchBar;
