import styles from "./carddeck.module.sass";

export default function CardDeck ({ children, title, description }) {
    return (
        <div className={styles["card-deck"]}>
            <div className={styles["deck-info"]}>
                <h3 className={styles["deck-title"]}>{title}</h3>
                <p className={styles["deck-description"]}>{description}</p>
            </div>
            <div className={styles["deck-content"]}>{children}</div>
        </div>
    )
}