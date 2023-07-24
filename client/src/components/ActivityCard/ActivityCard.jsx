//?React
import React from "react";
// import { useState } from "react";
// import { Link } from "react-router-dom";
//?styles
import styles from "./ActivityCard.module.css";
import button from "../../assets/img/bin.png";
// import { deleteActivity } from "../../redux/actions";

//? Routes
// import pathRoutes from "../../helpers/pathRoutes.helper";

const ActivityCard = (props) => {
	const { key, name, duration, difficulty, season, deleteActivity } = props;
	
	return (
		<div>
			<div key={key} className={styles.ActivityCard}>
				<div className={styles.text}>
					<div className={styles.name}>
						<h2>{name}</h2>
					</div>
				</div>
				<div className={styles.additional}>
					<div className={styles.content}>
						<h2>Season: {season}</h2>
					</div>
					<div className={styles.content}>
						<h2>Difficulty: {difficulty}</h2>
					</div>
					<div className={styles.content}>
						<h2>Duration: {duration}</h2>
					</div>
				</div>
				<div>
					<img
						className={styles.delete}
						onClick={() => deleteActivity(name)}
						src={button}
						alt='erase button'
					/>
				</div>
			</div>
		</div>
	);
};

export default ActivityCard;
