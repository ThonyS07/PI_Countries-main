import React from 'react'

import { useDispatch } from 'react-redux'

import { orderCountriesByName, changePage } from '../../redux/actions';
import styles from './OrderByName.module.css'

const OrderByName=()=> {
    const dispatch = useDispatch();
    const alphabeticallyOrder=(e)=> {
				dispatch(orderCountriesByName(e.target.value));
				dispatch(changePage(1));
				// setSelect(true)
			}
  return (
		<div className={styles.select}>
			<select name='order' onChange={(e) => alphabeticallyOrder(e)}>
				<option value='allCountries'>Order by name</option>
				<option value='Ascending'>A-Z</option>
				<option value='Descending'>Z-A</option>
			</select>
		</div>
	);
}

export default OrderByName
