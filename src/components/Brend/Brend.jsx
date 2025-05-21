import React from 'react';
import styles from "./Brend.module.css";

const Brend = ({ data }) => {
  return (
    <div>
      <div className={styles.wall}>
        {data.wall}

        <div className={styles.brends}>
          {data.brends}
          <img
          src={data.logoImg}
          alt=""
          className={
          data.id === 4
          ? styles.bigLogo
          : data.id === 5
          ? styles.sony_logo
          : styles.logo
  }
/>

          <p className={styles.open}>all products  &gt;</p>
          {data.open}
        </div>

        <div className={styles.all_products}>
          <div className={styles.wall_product_one}>
            <img className={styles.product_one} src={data.productOneImg} alt="" />
            {data.product_one}
            <p className={styles.product_one_text}>{data.product_one_text}</p>
          </div>

          <div className={styles.wall_product_two}>
            <img className={styles.product_two} src={data.productTwoImg} alt="" />
            {data.product_two}
            <p className={styles.product_two_text}>{data.product_two_text}</p>
          </div>

          <div className={styles.wall_product_three}>
            <img className={styles.product_three} src={data.productThreeImg} alt="" />
            {data.product_three}
            <p className={styles.product_three_text}>{data.product_three_text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brend;
