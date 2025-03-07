import styles from "./checkout.module.css";
import { useLocalStorage } from "@uidotdev/usehooks";
import { FaCircleMinus, FaCirclePlus, FaCircleXmark } from "react-icons/fa6";

// Checkout / Cart component
const Checkout = () => {
  const [cart, setCart] = useLocalStorage("cart", []);

  //Function to update the quantity of a product in the cart
  const updateQuantity = (id, delta) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item._id === id || item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) } // Decrease properly
          : item
      )
    );
  };

  //Function to remove item from the cart
  const removeItem = (id) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item._id !== id && item.id !== id)
    );
  };

  // Calculate the total price for all products in the cart
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        {cart.length === 0 ? (
          <p>Din kurv er tom.</p>
        ) : (
          cart.map((product) => (
            <div key={product._id || product.id} className={styles.yourOrder}>
              <div className={styles.topPart}>
                <div className={styles.imageContainer}>
                  <img
                    src={product.image}
                    alt={product.title}
                    className={styles.productImage}
                  />
                </div>
                <div className={styles.contentContainer}>
                  <h3 className={styles.title}>{product.title}</h3>
                  <p className={styles.price}>{product.price},-</p>
                  <div className={styles.quantityControls}>
                    <FaCircleMinus
                      className={styles.button}
                      onClick={() =>
                        updateQuantity(product._id || product.id, -1)
                      }
                    >
                      -
                    </FaCircleMinus>
                    <span>{product.quantity}</span>
                    <FaCirclePlus
                      className={styles.button}
                      onClick={() =>
                        updateQuantity(product._id || product.id, 1)
                      }
                    >
                      +
                    </FaCirclePlus>
                  </div>
                </div>
                <div className={styles.removeContainer}>
                  <FaCircleXmark
                    className={styles.button}
                    onClick={() => removeItem(product._id || product.id)}
                  >
                    ❌
                  </FaCircleXmark>
                </div>
              </div>
              <div className={styles.bottomPart}>
                <p className={styles.productPrice}>
                  <span className={styles.green}>Total</span>{" "}
                  {product.price * product.quantity},-
                </p>
              </div>
            </div>
          ))
        )}
        <div className={styles.totalPriceContainer}>
          <h3 className={styles.totalPrice}>
            <span className={styles.green}>I alt</span> {totalPrice},-
          </h3>
        </div>
        <form className={styles.form}>
          <input type="email" name="email" placeholder="Din Email" required />
          <button type="submit" className={styles.submitButton}>
            Afgiv Ordre
          </button>
        </form>
      </div>
    </section>
  );
};

export default Checkout;
