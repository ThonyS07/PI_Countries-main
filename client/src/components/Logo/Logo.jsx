import logo from "../../assets/img/logo.png";
import styles from './Logo.module.css';

import React from 'react'

const Logo=()=> {
  return (
		<div className={styles.logo}>
			<img src={logo} alt='logo' />
			Countries
		</div>
	);
}

export default Logo;
