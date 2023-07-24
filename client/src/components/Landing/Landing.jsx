//? React
import React from "react";
import { Link } from "react-router-dom";

//? Components
// import NavBar from "../NavBar/NavBar";
import styles from "./Landing.module.css";
import Buttons from "../Buttons/Buttons";

//? Images
// import logo from "../../assets/img/logo.png";
// import happy from "../../assets/img/girl2x.png";
// import happyInSnow from "../../assets/img/girl22x.png";
// import manGlobe from "../../assets/img/boy2x.png";
import all from "../../assets/img/group.png";

//? Routes
import pathRoutes from "../../helpers/pathRoutes.helper";

const Landing = () => {
	return (
		<div className={styles.Landing}>
			<div className={styles.tittle}>Countries </div>
			<div className={styles.secondTittle}>& Activities</div>
			<div className={styles.content}>
				Vacations? Come and see where to go.
			</div>
			<div className={styles.button}>
				
					<Link to={pathRoutes.COUNTRIES} ><Buttons buttonName='Go to Countries'/></Link>
	
			</div>
			<div className={styles.right}>
				<img src={all} alt='all' />
			</div>
			
		</div>
	);
};

export default Landing;
