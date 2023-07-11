import React from 'react'
import styles from "./Buttons.module.css"

const Buttons = ({buttonName}) => {
  return (
    <div>
      <button className={styles.button}>{buttonName}</button>
    </div>
  )
}

export default Buttons;

