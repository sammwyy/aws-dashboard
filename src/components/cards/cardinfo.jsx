import styles from "./cardinfo.module.sass";

export default function CardInfo ({ color, title, value, url, icon }) {
    return (
        <div className={styles["wrapper"]}>
            <div className={styles["color-" + color]}>
                <div className={styles["card-info"]}>
                    <div className={styles["card-details"]}>
                        <h3 className={styles["card-title"]}>{title}</h3>
                        <p className={styles["card-value"]}>{value}</p>
                    </div>

                    {
                        icon && (
                            <div className={styles["card-icon"]}>
                                { icon }
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}