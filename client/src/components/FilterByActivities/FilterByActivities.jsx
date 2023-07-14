import React from "react";
import {
	changePage,
	filterByActivity,
	getAllActivities,
} from "../../redux/actions";
import { useDispatch } from "react-redux";

function FilterByActivities({ activities }) {
	const dispatch = useDispatch();
	function handleActivity(e) {
		e.preventDefault();
		e.target.value === "allActivities"
			? dispatch(getAllCountries())
			: dispatch(filterByActivity(e.target.value));
		// setOrder(e.target.value);
		dispatch(changePage(1));
	}

	return (
		<div>
			{!activities ? (
				<p>No se han creado actividades</p>
			) : (
				<select onChange={handleActivity}>
					<option value='allActivities' selected='true'>All activities</option>
					{activities.map((activity) => (
						<option value={activity} key={activity}>
							{activity}
						</option>
					))}
				</select>
			)}
		</div>
	);
}

export default FilterByActivities;
