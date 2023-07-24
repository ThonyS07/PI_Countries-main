//?React
import { React, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
//?Components
import Card from "../Card/Card";
import Paginated from "../Paginated/Paginated";
import CountryBar from "../CountryBar/CountryBar";
//?Styles
import styles from "./Countries.module.css";

//?Redux
import {
	changePage,
	getAllCountries,
	resetDetail,
	getAllActivities,
} from "../../redux/actions";

const Countries = () => {
	const allCountries = useSelector((state) => state.allCountries);
	console.log(allCountries);

	const numberPerPage = 10;
	const maxPage = Math.ceil(allCountries.length / numberPerPage);
	const currentPage = useSelector((state) => state.page);
	const countriesPerPage = () => {
		return allCountries.slice(
			(currentPage - 1) * numberPerPage,
			(currentPage - 1) * numberPerPage + numberPerPage
		);
	};
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getAllCountries());
		dispatch(resetDetail());
		dispatch(changePage(1));
		dispatch(getAllActivities());
		// dispatch(searchCountry())
	}, [dispatch]);
	return (
		<div className={styles.content}>
			<CountryBar />
			<div className={styles.Countries}>
				{!allCountries ? (
					<h4 className={styles.loading}>'Loading..'</h4>
				) : (
					countriesPerPage().map((country) => {
						return (
							<Card
								key={country.id}
								id={country.id}
								name={country.name}
								continent={country.continent}
								flagImg={country.flagImg}
								
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

export default Countries;
