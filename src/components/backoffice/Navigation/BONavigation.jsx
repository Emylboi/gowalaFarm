import { Link, NavLink } from "react-router-dom";
import styles from "./boNavigation.module.css";
import { icons } from "../../../services/icons";
import useAuth from "../../../hooks/useAuth";

// Backoffice Navigation
const BONavigation = () => {
    const { signOut, user } = useAuth();

  return (
    <div className={styles.navigation}>
      <div className={styles.brand}>
        <Link to={"/"} className={styles.banner}>
          Tilbage til forsiden
        </Link>
      </div>

      <div>
        <div className={styles.routes}>
          <NavLink
            to="/backoffice/products"
            className={({ isActive }) => (isActive ? styles.active : null)}
          >
            {icons["FaProductHunt"]} <span className={styles.title}>Products</span>
          </NavLink>

          <NavLink
            to="/backoffice/employees"
            className={({ isActive }) => (isActive ? styles.active : null)}
          >
            {icons["FaProductHunt"]} <span className={styles.title}>Employees</span>
          </NavLink>

          <NavLink
            to="/backoffice/articles"
            className={({ isActive }) => (isActive ? styles.active : null)}
          >
            {icons["FaProductHunt"]} <span className={styles.title}>Articles</span>
          </NavLink>

          <NavLink
            to="/backoffice/messages"
            className={({ isActive }) => (isActive ? styles.active : null)}
          >
            {icons["FaProductHunt"]} <span className={styles.title}>Messages</span>
          </NavLink>

          <NavLink
            to="/backoffice/orders"
            className={({ isActive }) => (isActive ? styles.active : null)}
          >
            {icons["FaProductHunt"]} <span className={styles.title}>Orders</span>
          </NavLink>

          <NavLink
            to="/backoffice/users"
            className={({ isActive }) => (isActive ? styles.active : null)}
          >
            {icons["FaProductHunt"]} <span className={styles.title}>Users</span>
          </NavLink>
          
          <NavLink
            to="/backoffice/subscriptions"
            className={({ isActive }) => (isActive ? styles.active : null)}
          >
            {icons["FaProductHunt"]} <span className={styles.title}>Subs</span>
          </NavLink>
        </div>
        
      </div>
      <div className={styles.welcomeMSG}>
        <h1 className={styles.welcome}>Hej {user.name} - Rolle: {user.role}</h1>
        <button onClick={() => signOut()}>Log Ud</button>
      </div>
    </div>
  );
};
export default BONavigation;
