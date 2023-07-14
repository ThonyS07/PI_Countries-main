//?React
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
//?styles
import styles from "./Card.module.css";
//? Routes
import pathRoutes from "../../helpers/pathRoutes.helper";

const Card = (props) => {
	const { id, name, flagImg, continent } = props;
	const [isFav, setIsFav] = useState(false);

	const handleFavorite = () => {
		// isFav ? removeFav(id) : addFav(props);
		setIsFav(!isFav);
	};
	return (
		<div>
			<div className={styles.Card}>
				<div className='border'>
					<div className={styles.flag}>
						<img src={flagImg} alt='flag' />
					</div>
				
					<div className={styles.texto}>
						<Link strict to={pathRoutes.COUNTRY_DETAILS + `${id}`}>
							<h1 className={styles.name}>{name}</h1>
						</Link>
					</div>
					<div className={styles.content}>
						<h2>{continent}</h2>

						<div className='favBoton'>
							{isFav ? (
								<button className={styles.favBoton} onClick={handleFavorite}>
									❤️
								</button>
							) : (
								<button className={styles.favBoton} onClick={handleFavorite}>
									🤍
								</button>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
