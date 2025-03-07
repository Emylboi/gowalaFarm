import { useState } from "react";
import styles from "./newsletter.module.css";
import NewsletterConfirmation from "./NewsletterConfirmation/NewsletterConfirmation";

const Newsletter = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newsletterData = {
      email,
    };

    try {
      const res = await fetch("http://localhost:3042/subscription", {
        method: "POST",
        body: JSON.stringify(newsletterData),
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

  //If the form was successfully filled, then show the confirmation component (so the user knows they're signed up), otherwise show the form for subscription
  return isSubmitted ? (
    <NewsletterConfirmation email={email} />
  ) : (
    <section className={styles.container}>
      <div className={styles.background}>
        <div className={styles.text}>
          <h2 className={styles.boldTitle}>Nyhedsbrev</h2>
          <h2 className={styles.greenTitle}>
            Få nyhederne fra gården på din mail.
          </h2>
          <p>
            Tilmeld dig vores nyhedsbrev - så kan du altid følge med i, hvad der
            sker på farmen.
          </p>
        </div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Din Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className={styles.button}>
            Tilmeld
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
