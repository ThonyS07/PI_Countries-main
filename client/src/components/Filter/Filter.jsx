import React from 'react'
import styles from './Filter.module.css'

const Filter=({handler,arr, value, name}) =>{
  return (
    <div className={styles.filter}>
		  <select className={styles.select} onChange={handler}>
					<option className={styles.option} value={value} selected='true'>{name}</option>
					{arr.map((element) => (
						<option value={element.name} key={element.name}>
							{element.name}
						</option>
					))}
				</select>
    </div>
  )
}

export default Filter
