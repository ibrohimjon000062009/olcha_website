import styles from './Product.module.css'
import phone from "../../assets/phone.png";
import { CiHeart } from "react-icons/ci";
import { IoStatsChartOutline } from "react-icons/io5";
import { SlBasket } from "react-icons/sl";
 
const ProductCard = ({data}) => {
    return (
        <div>
            <div className={styles.card}>
                <div className={styles.badge}>{data.badge}%</div>

                <div className={styles.actions}>{data.actions}
                    <button className={styles.btn}><CiHeart /> </button>
                    <button className={styles.btn}> <IoStatsChartOutline /> </button>
                </div>

                <div className={styles.imgBox}>{data.imgBox}
                    <img src={phone} alt="" />
                </div>

                <div className={styles.title}>{data.title}</div>

                <div className={styles.prices}>{data.prices}
                    <div className={styles.price}>{data.price} 3 309 000</div>
                    <div className={styles.old}>{data.old} 3 609 000</div>
                </div>
                <button className={styles.month}>{data.month}  388 000 x 12 oy</button>
                <div className={styles.btns}>{data.btns}
                    <button className={styles.blue}>{data.blue} <SlBasket /></button>
                    <button className={styles.yellow}>{data.yellow} Muddatli to'lov</button>
                </div>
            </div>

        </div>
    )
}

export default ProductCard
