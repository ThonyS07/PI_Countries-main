//? React
import React from "react";
//? React-Redux
import { useDispatch } from "react-redux";
//? Styles
import styles from "./Paginated.module.css";
//? Redux
import { changePage } from "../../redux/actions";

const Paginated = ({ currentPage, maxPage }) => {
	const dispatch = useDispatch();
	const nextPage = () => {
		if (currentPage < maxPage) {
			dispatch(changePage(currentPage * 1 + 1));
		}
	};

	const prevPage = () => {
		if (currentPage > 1) {
			dispatch(changePage(currentPage * 1 - 1));
		}
	};

	return (
		<div className={styles.Paginated}>
			<button className={styles.pageButton} onClick={prevPage}>
				Prev
			</button>
			<h4 className={styles.pageFont}>
				Page: {currentPage}/{maxPage}
			</h4>
			<button className={styles.pageButton} onClick={nextPage}>
				Next
			</button>
		</div>
	);
};

export default Paginated;
