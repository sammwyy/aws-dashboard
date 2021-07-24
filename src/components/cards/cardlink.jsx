import styles from "./cardlink.module.sass";

export default function CardLink ({ color, title, description, time, url, icon }) {
    return (
        <div className={styles["wrapper"]}>
            <div className={styles["color-" + color]}>
                <div className={styles["card-info"]}>
                    {
                        icon && (
                            <div className={styles["card-icon"]}>
                                { icon }
                            </div>
                        )
                    }
                    <div className={styles["card-details"]}>
                        <h3 className={styles["card-title"]}>{title}</h3>
                        <p className={styles["card-description"]}>{description}</p>
                        <span className={styles["card-time"]}>{time}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}