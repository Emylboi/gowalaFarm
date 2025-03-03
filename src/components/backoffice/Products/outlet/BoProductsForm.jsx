import { useEffect, useRef, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import styles from "../../boForm.module.css";

const BoProductsForm = () => {
  // We get the id from the URL.
  const { id } = useParams();

  // We reference to a form.
  const formRef = useRef();

  // We get the products, addProduct and updateProduct from the context.
  const [products, addProduct, updateProduct] = useOutletContext();

  // Determines whether we're in editmode or 'createmode' of an product. False as default.
  const [editMode, setEditMode] = useState(false);

  // useState for the product.
  const [product, setProduct] = useState(
    // If we have an id, we filter the products and get the first one. Otherwise we set it to null.
    id ? products?.filter((p) => p._id === id)[0] : null
  );

  // useState for the image, null as default value.
  const [image, setImage] = useState();

  useEffect(() => {
    //If we have an id, we find the product with that id, otherwise we set it to null.
    const foundProduct = id ? products.find((p) => p._id === id) : null;

    // We set the product to the foundProduct.
    setProduct(foundProduct);

    // We set the editMode to true if we have an id, otherwise false.
    setEditMode(!!id);

    // The useEffect only runs when the id or products change.
  }, [id, products]);

  // Function that handles the change of the image.
  const onImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  // Function that handles the submit of the form.
  const onHandleSubmit = (e) => {
    e.preventDefault();

    // We create a new FormData object.
    let formData = new FormData();

    // We append the title, price, and discount to the formData.
    formData.append("title", product.title);
    formData.append("price", product.price);
    formData.append("discount", product.discount);

    // If we're in editMode, we append the id to the formData.
    editMode && formData.append("id", product?._id);

    // If we have an image, we append the image to the formData.
    image && formData.append("file", image);

    // If we're in editMode, we update the product, otherwise we add the product.
    editMode ? updateProduct(formData) : addProduct(formData);
  };

  return (
    <div className={styles.content}>
      <h2>{editMode ? "Redigér Product" : "Opret Product"}</h2>
      <form onSubmit={onHandleSubmit} ref={formRef} className={styles.form}>
        <label>
          <img
            src={
              image
                ? URL.createObjectURL(image)
                : "http://localhost:3042/products/no-product.jpg"
            }
            width={200}
          ></img>
          <input className={styles.input} type="file" name={"file"} onChange={onImageChange}></input>
        </label>
        <label>
          {" "}
          Title
          <input
            className={styles.input}
            type="text"
            value={product?.title || ""}
            onChange={(e) =>
              setProduct({ ...product, title: e.target.value })
            }
          ></input>
        </label>
        <label>
          {" "}
          Price
          <input
            className={styles.input}
            type="text"
            value={product?.price || ""}
            onChange={(e) =>
              setProduct({ ...product, price: e.target.value })
            }
          ></input>
        </label>
        <label>
          {" "}
          Discount
          <input
            className={styles.input}
            type="text"
            value={product?.discount || ""}
            onChange={(e) => setProduct({ ...product, discount: e.target.value })}
          ></input>
        </label>
      
        <div className={styles.buttons}>
          <button className={styles.button}>{editMode ? "Redigér Product" : "Opret Product"}</button>{" "}
          <button className={styles.button} type="reset">RESET</button>
        </div>
      </form>
    </div>
  );
};
export default BoProductsForm;
