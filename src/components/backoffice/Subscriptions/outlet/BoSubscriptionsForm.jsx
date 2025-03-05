import { useEffect, useRef, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import styles from "../../boForm.module.css";

const BoSubscriptionsForm = () => {
  // We get the id from the URL.
  const { id } = useParams();

  // We reference to a form.
  const formRef = useRef();

  // We get the subscriptions, addSubscription and updateSubscription from the context.
  const [subscriptions, addSubscription, updateSubscription] = useOutletContext();

  // Determines whether we're in editmode or 'createmode' of an subscription. False as default.
  const [editMode, setEditMode] = useState(false);

  // useState for the subscription.
  const [subscription, setSubscription] = useState(
    // If we have an id, we filter the subscriptions and get the first one. Otherwise we set it to null.
    id ? subscriptions?.filter((p) => p._id === id)[0] : null
  );

  useEffect(() => {
    //If we have an id, we find the subscription with that id, otherwise we set it to null.
    const foundSubscription = id ? subscriptions.find((p) => p._id === id) : null;

    // We set the subscription to the foundSubscription.
    setSubscription(foundSubscription);

    // We set the editMode to true if we have an id, otherwise false.
    setEditMode(!!id);

    // The useEffect only runs when the id or subscriptions change.
  }, [id, subscriptions]);

  // Function that handles the submit of the form.
  const onHandleSubmit = (e) => {
    e.preventDefault();

    // We create a new FormData object.
    let formData = new FormData();

    // We append the email to the formData.
    formData.append("email", subscription.email);

    // If we're in editMode, we append the id to the formData.
    editMode && formData.append("id", subscription?._id);

    // If we're in editMode, we update the subscription, otherwise we add the subscription.
    editMode ? updateSubscription(formData) : addSubscription(formData);
  };

  return (
    <div className={styles.content}>
      <h2>{editMode ? "Redigér Subscription" : "Opret Subscription"}</h2>
      <form onSubmit={onHandleSubmit} ref={formRef} className={styles.form}>
        <label>
          {" "}
          Email
          <input
            className={styles.input}
            type="text"
            value={subscription?.email || ""}
            onChange={(e) =>
              setSubscription({ ...subscription, email: e.target.value })
            }
          ></input>
        </label>
      
        <div className={styles.buttons}>
          <button className={styles.button}>{editMode ? "Redigér Subscription" : "Opret Subscription"}</button>{" "}
          <button className={styles.button} type="reset">RESET</button>
        </div>
      </form>
    </div>
  );
};
export default BoSubscriptionsForm;
