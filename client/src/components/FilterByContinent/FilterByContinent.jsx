import React from 'react'
import { useDispatch } from 'react-redux';
import { changePage, filterByContinent} from '../../redux/actions';

const FilterByContinent = () => {
	const dispatch=useDispatch()
	const handleContinents = (e)=> {
		e.preventDefault();
		dispatch(filterByContinent(e.target.value));
		dispatch(changePage(1));
	}
  return (
		<div>
			<select onChange={handleContinents}>
				<option value='allCountries' key='All'>
					All continents
				</option>
				<option value='Africa' key='Africa'>
					Africa
				</option>
				<option value='Antarctica' key='Antarctica'>
					Antarctica
				</option>
				<option value='Asia' key='Asia'>
					Asia
				</option>
				<option value='Europe' key='Europe'>
					Europe
				</option>
				<option value='North America' key='NorthAmerica'>
					North America
				</option>
				<option value='Oceania' key='Oceania'>
					Oceania
				</option>
				<option value='South America' key='SouthAmerica'>
					South America
				</option>
			</select>
		</div>
	);
}

export default FilterByContinent
