// REACT
import React from 'react'
import { Link } from 'react-router-dom'
//Components
import Buttons from '../Buttons/Buttons'
import Logo from '../Logo/Logo'
// import SearchBar from '../SearchBar/SearchBar'

// Styles
import styles from './NavBar.module.css'

//Routes
import pathRoutes from '../../helpers/pathRoutes.helper'


const NavBar=()=> {
  return (
		<div className={styles.NavBar}>
			<Logo/>
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
