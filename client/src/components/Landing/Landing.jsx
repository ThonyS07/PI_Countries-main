//? React
import React from "react";
import {Link} from 'react-router-dom'


//? Components
// import NavBar from "../NavBar/NavBar";
import styles from "./Landing.module.css";
import Buttons from "../Buttons/Buttons";

//? Images
import logo from "../../assets/img/logo.png";


//? Routes
import pathRoutes from "../../helpers/pathRoutes.helper";

const Landing = () => {
	return (
		<div className={styles.Landing}>
			{/* <NavBar className={styles.Nav} /> */}
			<div className={styles.boxesWrapper}>
				<div className={styles.left}>
					<tittle className={styles.tittle}>
						<h1>Countries & Activities</h1>
					</tittle>
					<p className={styles.content}>
						¿Planeas vacaciones? Conoce a donde ir y que hacer.
					</p>
					<Link to={pathRoutes.COUNTRIES}>
						<div className={styles.buttons}>
							<Buttons buttonName='Ver Countries' />
						</div>
					</Link>
				</div>
				<div className={styles.right}>
					<img src={logo} alt='logo' />
					<img src={logo} alt='logo' />
					<img src={logo} alt='logo' />
				</div>
			</div>
		</div>
	);
};

export default Landing;
