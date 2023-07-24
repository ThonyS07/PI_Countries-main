// REACT
import React from "react";
import { Link, /*useLocation*/ } from "react-router-dom";
//Components
import Buttons from "../Buttons/Buttons";
import Logo from "../Logo/Logo";
// import SearchBar from '../SearchBar/SearchBar'

// Styles
import styles from "./NavBar.module.css";

//Routes
import pathRoutes from "../../helpers/pathRoutes.helper";

const NavBar = () => {

	return (
		<div className={styles.NavBar}>
			<Link className={styles.link} to={pathRoutes.LANDING}>
				<Logo />
			</Link>
			<div className={styles.buttonsWrapper}>
				<Link className={styles.link} to={pathRoutes.LANDING}>
					Landing
				</Link>
				<Link className={styles.link} to={pathRoutes.COUNTRIES}>
					Countries
				</Link>
				<Link className={styles.link} to={pathRoutes.ACTIVITIES}>
					Activities
				</Link>
			</div>
			
			<Link className={styles.link} to={pathRoutes.ADD_ACTIVITIES}>
				<Buttons buttonName={"Add Activity"} />
			</Link>
		</div>
	);
};

export default NavBar;
