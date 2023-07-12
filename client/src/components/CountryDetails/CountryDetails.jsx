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

	return (
		<div className={styles.card}>
			{!countriesDetail ? (
				'Loading...'
			) : (
				<div>
					<img src={countriesDetail?.flagImg} alt='' className={styles.img} />
					<h1 className={styles.id}>{countriesDetail?.id}</h1>
					<h1 className={styles.name}>{countriesDetail?.name}</h1>
					<h3 className={styles.description}>
						<span className={styles.span}>Continent: </span>
						{countriesDetail?.continent}
					</h3>
					<h3 className={styles.description}>
						<span className={styles.span}>Capital: </span>
						{countriesDetail?.capital}
					</h3>
					<h3 className={styles.description}>
						<span className={styles.span}>Subregion: </span>
						{countriesDetail?.subregion}
					</h3>
					<h3 className={styles.description}>
						<span className={styles.span}>Area: </span>
						{countriesDetail?.area} km²
					</h3>
					<h3 className={styles.description}>
						<span className={styles.span}>Population: </span>
						{countriesDetail?.population}
					</h3>
				</div>
			)}
		</div>
	);
};

export default CountryDetails;
