import React from "react";
import styles from './Order.module.css';

const Order = ({handler,arr}) => {
	return (
		<div className={styles.order}>
			<select className={styles.select} onChange={handler}>
				
				{arr.map((element) => (
					<option value={element.value} key={element.name}>
						{element.name}
					</option>
				))}
			</select>
		</div>
	);
};

export default Order;
