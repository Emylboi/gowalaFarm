import styles from "./product.module.css";

const Product = ({ product }) => {
  const { title, price, discount, image } = product;
  return (
    <div className={styles.product}>
      <div className={styles.discountContainer}>
        <p className={styles.discount}>{discount}%</p>
      </div>
      <img src={image} className={styles.image} alt={title} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.price}>{price},-</p>
      <button className={styles.button}>Tilføj til kurv</button>
    </div>
  );
};

export default Product;
