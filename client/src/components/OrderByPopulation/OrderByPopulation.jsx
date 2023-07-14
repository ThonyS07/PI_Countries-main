import React from "react";

import { useDispatch } from "react-redux";

import { orderCountriesByPopulation, changePage } from "../../redux/actions";
import styles from "./OrderByPopulation.module.css";

const OrderByPopulation = () => {
	const dispatch = useDispatch();
	const populationOrder = (e) => {
		dispatch(orderCountriesByPopulation(e.target.value));
		dispatch(changePage(1));
		// setSelect(true)
	};
	return (
		<div className={styles.select}>
			<select name='order' onChange={(e) => populationOrder(e)}>
				<option value='allCountries'>Order by population</option>
				<option value='Ascending'>Min-Max</option>
				<option value='Descending'>Max-Min</option>
			</select>
		</div>
	);
};

export default OrderByPopulation;
