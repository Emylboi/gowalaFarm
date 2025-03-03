import Navigation from "./Navigation/Navigation";
import styles from "./header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.leftSide}>
        <img src="./logo.png" alt="" />
      </div>
      <div className={styles.rightSide}>
        <Navigation />
        {/* CART */}
      </div>
    </div>
  );
};

export default Header;
