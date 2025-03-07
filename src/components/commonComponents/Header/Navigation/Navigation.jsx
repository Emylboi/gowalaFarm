import { Link, NavLink } from "react-router-dom";
import styles from "./navigation.module.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaXmark } from "react-icons/fa6";
import { useState } from "react";
import useAuth from "../../../../hooks/useAuth";

// Navigation component
const Navigation = () => {
  const [activeBM, setActiveBM] = useState(false);
  const { signOut, user } = useAuth();

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
          onClick={() => setActiveBM(false)}
        >
          Shop
        </NavLink>

        <NavLink
          to="/services"
          className={({ isActive }) => (isActive ? styles.active : null)}
          onClick={() => setActiveBM(false)}
        >
          Services
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? styles.active : null)}
          onClick={() => setActiveBM(false)}
        >
          Om
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? styles.active : null)}
          onClick={() => setActiveBM(false)}
        >
          Kontakt
        </NavLink>

        <NavLink
          to="/checkout"
          className={({ isActive }) => (isActive ? styles.active : null)}
          onClick={() => setActiveBM(false)}
        >
          Checkout
        </NavLink>

        {/* Shows Login if user is not logged in, and logout if user is logged in */}
        {!user || Object.keys(user).length === 0 ? (
          <NavLink
            to="/login"
            className={({ isActive }) => (isActive ? styles.active : null)}
            onClick={() => setActiveBM(false)}
          >
            Login
          </NavLink>
        ) : (
          <>
            <button
              className={styles.logout}
              onClick={() => {
                signOut();
                setActiveBM(false);
              }}
            >
              Log Ud
            </button>

            {/* If the user's role is admin, backoffice is visible on navigation. */}
            {user.role === "admin" && (
              <NavLink
                to="/backoffice"
                className={({ isActive }) => (isActive ? styles.active : null)}
                onClick={() => setActiveBM(false)}
              >
                Backoffice
              </NavLink>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Navigation;
