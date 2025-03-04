import { useEffect, useState } from "react";
import useTinyFetch from "../../../hooks/tinyFetch.hook";
import Product from "./Product/Product";
import styles from "./products.module.css";

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
  };

const Products = ({maxItems = null, randomize = false}) => {
  const [products, setProducts] = useState([]);

  const { data, fetchData, loading, error, noDataMessage } = useTinyFetch();

  useEffect(() => {
    fetchData("/products");
  }, []);

  useEffect(() => {
    setProducts(data);
  }, [data]);

  // Shuffle the products if randomize is true
  const shuffledProducts = randomize ? shuffleArray([...products]) : products;

  // Limit the number of displayed products
  const displayedProducts = maxItems ? shuffledProducts.slice(0, maxItems) : shuffledProducts;

  return (
    <div className={styles.products}>
      {loading && <p>Loading...</p>}

      {noDataMessage && <p>{noDataMessage}</p>}

      {displayedProducts.length > 0 &&
        displayedProducts.map((product) => (
          <Product key={product._id} product={product} />
        ))}
    </div>
  );
};

export default Products;
