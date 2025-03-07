import { useEffect, useState } from "react";
import useTinyFetch from "../../../hooks/tinyFetch.hook";
import Product from "./Product/Product";
import styles from "./products.module.css";
import { MdSortByAlpha } from "react-icons/md";

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

//All Products
const Products = ({ maxItems = null, randomize = false, sort = false }) => {
  const [products, setProducts] = useState([]);
  const [sorted, setSorted] = useState(false);

  const { data, fetchData, loading, error, noDataMessage } = useTinyFetch();

  useEffect(() => {
    fetchData("/products");
  }, []);

  useEffect(() => {
    setProducts(data);
  }, [data]);

  // Shuffle the products if randomize is true - as needed on homepage
  let processedProducts = randomize
    ? shuffleArray([...products])
    : [...products];

  //If sort is enabled through a prop, and sorted is true
  if (sort && sorted) {
    processedProducts.sort((a, b) => a.title.localeCompare(b.title));
  }

  // Limit the number of displayed products
  const displayedProducts = maxItems
    ? processedProducts.slice(0, maxItems)
    : processedProducts;

  return (
    <div className={styles.products}>
      <div className={styles.sortContainer}>
        {/* If sort prop is present, then we show the sorting button. */}
        {sort && (
          <div
            
            onClick={() => setSorted(!sorted)}
          >
            <MdSortByAlpha className={styles.sortButton}/>
          </div>
        )}
      </div>

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
