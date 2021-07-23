import { Link } from "react-router-dom";
import styles from "./navlink.module.sass";

export default function NavLink ({ url, title }) {
    return (
        <div className={styles["container"]}>
            <Link className={styles["navlink"]} to={url}>
                { title }
            </Link>
        </div>
    )
}