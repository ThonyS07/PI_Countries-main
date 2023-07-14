import React from 'react'

const FilterByContinent=({handleContinents})=> {
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
