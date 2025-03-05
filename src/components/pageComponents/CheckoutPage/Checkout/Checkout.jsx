import styles from "./checkout.module.css";

const Checkout = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.yourOrder}>
          <div className={styles.topPart}>
              <img src="" alt="" /> {/* Show product image */}
              <div>
                <h3>Gowala Parmasan</h3> {/* Product Name */}
                <p>89,-</p> {/* Product Price */}
                <div>
                  {/* Minus */}
                  {/* Amount */}
                  {/* Plus */}
                </div>
              </div>
              <img src="" alt="" /> {/* Remove Product from cart */}
          </div>
          <div className={styles.buttomPart}>
            <p>Total</p>
            {/* Price of amount of product */}
          </div>
          <div className={styles.finalPrice}></div>
        </div>
        <div className={styles.sendOrder}></div>
      </div>
    </section>
  );
};

export default Checkout;
