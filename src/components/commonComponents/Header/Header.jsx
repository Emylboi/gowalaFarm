import { Link } from "react-router-dom";
import Navigation from "./Navigation/Navigation";
import styles from "./header.module.css";
import { IoMdBasket } from "react-icons/io";
import { useLocalStorage } from "@uidotdev/usehooks";

//Header component
const Header = () => {
  const [cart] = useLocalStorage("cart", []);

  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className={styles.header}>
      <Link to="/">
        <img src="./logo.png" alt="Logo" />
      </Link>
      <div className={styles.rightSide}>
        <Navigation />
        <Link to="/checkout" className={styles.cartContainer}>
          <IoMdBasket className={styles.checkoutIcon} />
          {/* If there's anything in the cart, quantity is shown at the top of the basket logo. */}
          {totalQuantity > 0 && (
            <span className={styles.cartQuantity}>{totalQuantity}</span>
          )}
        </Link>
      </div>
    </div>
  );
};

export default Header;
