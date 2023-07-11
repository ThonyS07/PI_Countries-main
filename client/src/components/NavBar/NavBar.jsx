import React from 'react'
import styles from './NavBar.module.css'
import pathRoutes from '../../helpers/pathRoutes.helper'
import { Link } from 'react-router-dom'
//Components
import Buttons from '../Buttons/Buttons'
import SearchBar from '../SearchBar/SearchBar'

//images
import logo from '../../assets/img/logo.png'


const NavBar=()=> {
  return (
		<div className={styles.NavBar}>
			<logo/>
			<div className={styles.buttonsWrapper}>
				<Link className={styles.link} to={pathRoutes.HOME}>
					Home
				</Link>
				<Link className={styles.link} to={pathRoutes.COUNTRIES}>
					Countries
				</Link>
				<Link className={styles.link} to={pathRoutes.ACTIVITIES}>
					Activities
				</Link>
			</div>
			<Buttons buttonName={'Login'}/>
		</div>
	);
}

export default NavBar;
