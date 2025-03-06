import styles from "./product.module.css";
import { useLocalStorage } from "@uidotdev/usehooks";

const Product = ({ product }) => {
  const { title, price, discount, image, _id, id } = product;
  const [cart, setCart] = useLocalStorage("cart", []);

  const productId = _id || id; // Handle cases where ID might be named differently

  const addToCart = () => {
    if (!productId) {
      console.error("Product ID is missing:", product);
      return;
    }

    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item._id === productId || item.id === productId);
      if (existingProduct) {
        return prevCart.map((item) =>
          (item._id === productId || item.id === productId)
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, _id: productId, quantity: 1 }];
      }
    });
  };

  return (
    <div className={styles.product}>
      <div className={styles.discountContainer}>
        <p className={styles.discount}>{discount}%</p>
      </div>
      <img src={image} className={styles.image} alt={title} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.price}>{price},-</p>
      <button className={styles.button} onClick={addToCart}>
        Tilføj til kurv
      </button>
    </div>
  );
};

export default Product;
