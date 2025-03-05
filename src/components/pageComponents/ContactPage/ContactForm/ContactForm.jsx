import { useState } from "react";
import styles from "./contactForm.module.css";

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const messageData = {
      name,
      email,
      description,
    };

    try {
      const res = await fetch("http://localhost:3042/message", {
        method: "POST",
        body: JSON.stringify(messageData),
        headers: {
          "Content-Type": "application/json", // Tell the server we are sending raw JSON
        },
      });

      if (res.ok) {
        setIsSubmitted(true); // Show success message if the request was successful
      } else {
        console.error("Error:", res.statusText); // Handle error
      }
    } catch (error) {
      console.log("Error:", error); // Handle network error
    }
  };

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h3 className={styles.title}>Send en besked til os</h3>
        {isSubmitted ? (
          <div className={styles.successMessage}>
            <h2>
              Hej {name}. <br /> Tak for din besked! <br /> Du hører fra os
              snarest.
            </h2>
          </div>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Dit Navn"
              value={name} // Bind input value to state
              onChange={(e) => setName(e.target.value)} // Update name state on input change
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Din Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <textarea
              name="description"
              placeholder="Din Besked"
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
            <button type="submit">Send besked</button>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactForm;
