import { useEffect, useRef, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import styles from "../../boForm.module.css";

const BoOrdersForm = () => {
  // We get the id from the URL.
  const { id } = useParams();

  // We reference to a form.
  const formRef = useRef();

  // We get the orders, addOrder and updateOrder from the context.
  const [orders, addOrder, updateOrder] = useOutletContext();

  // Determines whether we're in editmode or 'createmode' of an order. False as default.
  const [editMode, setEditMode] = useState(false);

  // useState for the order.
  const [order, setOrder] = useState(
    // If we have an id, we filter the order and get the first one. Otherwise we set it to null.
    id ? orders?.filter((p) => p._id === id)[0] : null
  );

  useEffect(() => {
    //If we have an id, we find the order with that id, otherwise we set it to null.
    const foundOrder = id ? orders.find((p) => p._id === id) : null;

    // We set the order to the foundOrder.
    setOrder(foundOrder);

    // We set the editMode to true if we have an id, otherwise false.
    setEditMode(!!id);

    // The useEffect only runs when the id or orders change.
  }, [id, orders]);

  // Function that handles the change of the image.
  const onImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  // Function that handles the submit of the form.
  const onHandleSubmit = (e) => {
    e.preventDefault();

    // We create a new FormData object.
    let formData = new FormData();

    // We append the name and text to the formData.
    formData.append("name", order.email);
    formData.append("text", order.items);

    // If we're in editMode, we append the id to the formData.
    editMode && formData.append("id", order?._id);

    // If we're in editMode, we update the order, otherwise we add the order.
    editMode ? updateOrder(formData) : addOrder(formData);
  };

  return (
    <div className={styles.content}>
      <h2>{editMode ? "Redigér Order" : "Opret Order"}</h2>
      <form onSubmit={onHandleSubmit} ref={formRef} className={styles.form}>
        <label>
          {" "}
          Email
          <input
            className={styles.input}
            type="text"
            value={order?.email || ""}
            onChange={(e) =>
              setOrder({ ...order, email: e.target.value })
            }
          ></input>
        </label>
        <label>
          {" "}
          Items
          <input
            className={styles.input}
            type="text"
            value={order?.items || ""}
            onChange={(e) =>
              setOrder({ ...order, items: e.target.value })
            }
          ></input>
        </label>
      
        <div className={styles.buttons}>
          <button className={styles.button}>{editMode ? "Redigér Ordre" : "Opret Ordre"}</button>{" "}
          <button className={styles.button} type="reset">RESET</button>
        </div>
      </form>
    </div>
  );
};
export default BoOrdersForm;
