import React from 'react'

import { useDispatch } from 'react-redux'

import { orderCountriesByname, changePage } from '../../redux/actions';
import styles from './OrderByName.module.css'

const OrderByName=()=> {
    const dispatch = useDispatch();
    const alphabeticallyOrder=(e)=> {
				dispatch(orderCountriesByname(e.target.value));
				dispatch(changePage(1));
				// setSelect(true)
			}
  return (
		<div className={styles.select}>
			<select name='order' onChange={(e) => alphabeticallyOrder(e)}>
				<option value='allCountries'>Order by name</option>
				<option value='Ascending'>Alphabetically ascending</option>
				<option value='Descending'>Alphabetically descending</option>
			</select>
		</div>
	);
}

export default OrderByName
