import styles from "./Banner.module.scss"
import banner from "../../assets/img.png"

export default function Banner() {
    return (
        <img className={styles.banner} src={banner} />
    )
}