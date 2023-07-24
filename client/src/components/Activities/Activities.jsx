import { React, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
//?Components
import ActivityCard from "../ActivityCard/ActivityCard";
import Paginated from "../Paginated/Paginated";
import ActivityBar from "../ActivityBar/ActivityBar";
//?Styles
import styles from "./Activities.module.css";

//?Redux
import {
	changePage,
	deleteActivity,
	// resetDetail,
	getAllActivities,
} from "../../redux/actions";
const Activities = () => {
	const allActivities = useSelector((state) => state.allActivities);
	console.log(allActivities);

	const numberPerPage = 6;
	const maxPage = Math.ceil(allActivities.length / numberPerPage);
	const currentPage = useSelector((state) => state.page);
	const activitiesPerPage = () => {
		return allActivities.slice(
			(currentPage - 1) * numberPerPage,
			(currentPage - 1) * numberPerPage + numberPerPage
		);
	};
	const dispatch = useDispatch();
	useEffect(() => {
		// dispatch(getAllCountries());
		// dispatch(resetDetail());
		dispatch(changePage(1));
		dispatch(getAllActivities());
		// dispatch(searchCountry())
	}, [dispatch]);
	const deleteA = async (activity)=> {
		// const deleteAlert = await swal({
		// 	tittle: "DELETE ACTIVITY",
		// 	text: "are you sure that do you want to delete this activity?",
		// 	icon: "warning",
		// 	buttons: ["no", "yes"],
		// });
		// if (deleteAlert) {
			dispatch(deleteActivity(activity));
		// }
	}
	return (
		<div className={styles.content}>
			<ActivityBar />
			<div className={styles.Activities}>
				{!allActivities ? (
					<h4 className={styles.loading}>'Loading..'</h4>
				) : (
					activitiesPerPage().map((activity) => {
						return (
							<ActivityCard
								key={activity.id}
								id={activity.id}
								name={activity.name}
								difficulty={activity.difficulty}
								season={activity.season}
								duration={activity.duration}
								countries={activity.countries}
								deleteActivity={deleteA}
							/>
						);
					})
				)}
			</div>
			<div className={styles.paginated}>
				<Paginated currentPage={currentPage} maxPage={maxPage} />
			</div>
		</div>
	);
};

export default Activities;
