//?React
import { React,useEffect } from "react";
import {useSelector,useDispatch} from 'react-redux'
//?Components
import Card from "../Card/Card";
//?Styles
import styles from './Home.module.css'

//?Redux
import { getAllCountries } from "../../redux/actions";

const Home = () => {
	const allCountries = useSelector((state) => state.allCountries);
	const dispatch = useDispatch();
	 useEffect(() => {
			dispatch(getAllCountries());
			// dispatch(resetDetail());
			// dispatch(changePage(1));
		}, [dispatch]);
	return (
		<div className={styles.Home}>
			{!allCountries ? 'Loading..' : allCountries.map((country) => {
				return (
					<Card
						key={country.id}
						id={country.id}
						name={country.name}
						continent={country.continent}
						flagImg={country.flagImg}
					/>
				);
			})}
		</div>
	);
};

export default Home;
