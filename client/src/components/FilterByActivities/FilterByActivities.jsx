import React from "react";
import {
	changePage,
	filterByActivity,
	getAllCountries,
} from "../../redux/actions";
import { useDispatch,useSelector } from "react-redux";

function FilterByActivities() {
	const dispatch = useDispatch();
	const allActivities= useSelector(state=>state.allActivities)
	const handleActivity=(e)=> {
		e.preventDefault();
		e.target.value === "allActivities"
			? dispatch(getAllCountries())
			: dispatch(filterByActivity(e.target.value));
		// setOrder(e.target.value);
		dispatch(changePage(1));
	}

	return (
		<div>
			  
				<select onChange={handleActivity}>
					<option value='allActivities' selected='true'>All activities</option>
					{allActivities.map((activity) => (
						<option value={activity} key={activity}>
							{activity}
						</option>
					))}
				</select>
			
		</div>
	);
}

export default FilterByActivities;
