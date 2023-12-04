import { FC } from "react";
import styles from "./header.module.css";

const Header: FC = () => {
    return (
        <header>
            <nav>
                <div className={styles.logo}>

                </div>
            </nav>
        </header>
    );
};

export default Header;