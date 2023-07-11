import React from "react";
import styles from "./SearchBar.module.css";

const SearchBar = () => {
	return (
		<div className={styles.searchBar}>
			<input className={styles.input} type='search'></input>
			<button className={styles.searchButton} type='button'></button>
		</div>
	);
};

export default SearchBar;
