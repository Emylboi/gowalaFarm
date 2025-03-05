import { Link } from "react-router-dom";
import Navigation from "./Navigation/Navigation";
import styles from "./header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <Link to="/">
        <img src="./logo.png" alt="Logo" />
      </Link>
      <div className={styles.rightSide}>
        <Navigation />
        {/* CART */}
      </div>
    </div>
  );
};

export default Header;
