import styles from './Product.module.css'
import { CiHeart } from "react-icons/ci";
import { IoStatsChartOutline } from "react-icons/io5";
import { SlBasket } from "react-icons/sl";
const ProductCard = ({ data }) => {
    return (
        <div className={styles.card}>
            <div className={styles.img_shadow} >
            { }
            {data.badge && (
                <div className={styles.badge}>{data.badge}</div>
            )}

            <div className={styles.actions}>
                <button className={styles.btn}><CiHeart /> </button>
                <button className={styles.btn}> <IoStatsChartOutline /> </button>
            </div>
            <div className={styles.imgBox}>
                <img src={data.image} alt={data.title} />
            </div>
            </div>

            <div className={styles.title}>{data.title} </div>

            <div className={styles.prices}>
                <div className={styles.price}> {data.price}</div>
                <div className={styles.old}>
                 {data.old ? data.old : "\u00A0"}
  </div>

            </div>

            <button className={styles.month}>{data.month} </button>

            <div className={styles.btns}>
                <button className={styles.blue}>{data.blue} <SlBasket /></button>
                <button className={styles.yellow}>{data.yellow} Muddatli to'lov</button>
            </div>
        </div>

    )
}

export default ProductCard
