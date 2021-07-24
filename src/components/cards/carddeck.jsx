import styles from "./carddeck.module.sass";

export default function CardDeck ({ children }) {
    return (
        <div className={styles["card-deck"]}>
            {children}
        </div>
    )
}