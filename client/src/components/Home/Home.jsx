import React from "react";
import NavBar from "../NavBar/NavBar";
import styles from "./Home.module.css";
// import pathRoutes from "../../helpers/pathRoutes.helper";
import Buttons from "../Buttons/Buttons";
import logo from "../../assets/img/logo.png";

export default function Home() {
	return (
		<div className={styles.Home}>
			<NavBar className={styles.Nav} />
			<div className={styles.boxesWrapper}>
				<div className={styles.left}>
					<tittle className={styles.tittle}>
						<h1>Countries & Activities</h1>
					</tittle>
					<p className={styles.content}>
						¿Planeas vacaciones? Conoce a dondeeee ir y que hacer.
					</p>
					<div className={styles.buttons}>
						<Buttons buttonName='Ver Countries' />
						<Buttons buttonName='Ver Activities' />
					</div>
				</div>
				<div className={styles.right}>
					<img src={logo} alt='logo' />
					<img src={logo} alt='logo' />
					<img src={logo} alt='logo' />
				</div>
			</div>
		</div>
	);
}
