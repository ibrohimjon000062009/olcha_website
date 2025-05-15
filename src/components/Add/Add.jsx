import React from 'react'
import styles from './Add.module.css'
import fridge from '../../assets/fridge_add.jpg'
import furniture from '../../assets/furniture_add.jpg'

const Add = () => {
  return (
    <div>
      <div className={styles.wrapper}>
        <img className={styles.img_furniture} src={furniture} alt="img" />
        <img className={styles.img_fridge} src={fridge} alt="img" />
      </div>
    </div>
  )
}

export default Add
