import { Link, NavLink } from "react-router-dom";
import styles from "./navigation.module.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaXmark } from "react-icons/fa6";
import { useState } from "react";

// Navigation component  
const Navigation = () => {
    const [activeBM, setActiveBM] = useState(false);

    function navMenu() {
      setActiveBM((prev) => !prev);
    }

  return (
    <div className={styles.navigation}>
      <div className={styles.burgerMenu}>
        {!activeBM ? (
          <RxHamburgerMenu onClick={navMenu} />
        ) : (
          <FaXmark onClick={navMenu} />
        )}
      </div>
      <div className={`${styles.nav} ${activeBM ? styles.show : ""}`}>
        <NavLink
          to="/shop"
          className={({ isActive }) => (isActive ? styles.active : null)}
        >
          Shop
        </NavLink>

        <NavLink
          to="/services"
          className={({ isActive }) => (isActive ? styles.active : null)}
        >
          Services
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? styles.active : null)}
        >
          Om
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? styles.active : null)}
        >
          Kontakt
        </NavLink>

        <NavLink
          to="/checkout"
          className={({ isActive }) => (isActive ? styles.active : null)}
        >
          Checkout
        </NavLink>

        <NavLink
          to="/backoffice"
          className={({ isActive }) => (isActive ? styles.active : null)}
        >
          Backoffice
        </NavLink>
      </div>
    </div>
  );
};
export default Navigation;