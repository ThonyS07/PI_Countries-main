import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
	countryDetail,
	resetCountries,
	// deleteActivity,
} from "../../redux/actions";

// import ActivityCard from "../ActivityCard/ActivityCard";
import styles from "./CountryDetails.module.css";
const CountryDetails = () => {
	const dispatch = useDispatch();
	const { id } = useParams();
	const countriesDetail = useSelector((state) => state.countriesDetail);
	useEffect(() => {
		dispatch(countryDetail(id));
		dispatch(resetCountries());
	}, [dispatch, id]);
	const activities = countriesDetail.activities?.map((activity) => {
		return {
			name: activity.name,
			difficulty: activity.difficulty,
			duration: activity.duration,
			season: activity.season,
		};
	});

	return (
		<div className={styles.card}>
			{!countriesDetail ? (
				"Loading..."
			) : (
				<div className={styles.card}>
					<div className={styles.imgContainer}>
						<img
							src={countriesDetail?.flagImg}
							alt='flag'
							className={styles.img}
						/>
					</div>
					<div className={styles.rightContainer}>
						<h4 className={styles.name}>{countriesDetail?.name}</h4>

						<div className={styles.detailsContainer}>
							<h3 className={styles.description}>
								<span className={styles.span}>Capital: </span>
								<div className={styles.rightColumn}>
									{countriesDetail?.capital}
								</div>
							</h3>

							<h3 className={styles.description}>
								<span className={styles.span}>Continent: </span>
								<div className={styles.rightColumn}>
									{countriesDetail?.continent}
								</div>
							</h3>
							<h3 className={styles.description}>
								<span className={styles.span}>Subregion: </span>
								<div className={styles.rightColumn}>
									{countriesDetail?.subregion}
								</div>
							</h3>

							<h3 className={styles.description}>
								<span className={styles.span}>Area: </span>
								<div className={styles.rightColumn}>
									{countriesDetail?.area} km²
								</div>
							</h3>
							<h3 className={styles.description}>
								<span className={styles.span}>Population: </span>
								<div className={styles.rightColumn}>
									{countriesDetail?.population} habs
								</div>
							</h3>
						</div>
						<h4 className={styles.name}>Activities: </h4>
						<div className={styles.activities}>
							{activities?.length > 0 ? (
								activities?.map((activity) => {
									return (
										<div className={styles.activity} key={activity.id}>
											<div>Name: {activity.name}</div>
											<div>Difficulty: {activity.difficulty}</div>
											<div>Duration: {activity.duration}</div>
											<div>Season: {activity.season}</div>
										</div>
									);
								})
							) : (
								<div className={styles.noActivities}>Without activities</div>
							)}
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default CountryDetails;
