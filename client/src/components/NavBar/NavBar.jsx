import React from 'react'
import styles from './NavBar.module.css'
import pathRoutes from '../../helpers/pathRoutes.helper'
import { Link } from 'react-router-dom'
import logo from '../../assets/img/logo.png'
import Buttons from '../Buttons/Buttons'

const NavBar=()=> {
  return (
		<div className={styles.NavBar}>
			<div className={styles.logo}>
				<img src={logo} alt='logo' />
				Countries
			</div>
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
