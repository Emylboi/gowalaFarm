import styles from "./contactInfo.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { MdWatchLater } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const ContactInfo = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.h2text}>Hurtig kontakt</h2>
        <div>
          <p className={styles.text}>
            Har du spørgsmål eller ønsker du at høre mere om vores produkter?
          </p>
          <p className={styles.text}>
            Kontakt os - vi står altid klar til at hjælpe!
          </p>
        </div>
        <div className={styles.info}>
          <div className={styles.infoItem}>
            <FaPhoneAlt className={styles.contactIcon}/>
            <div className={styles.flex}>
              <p>+88130-589-745-6987</p>
              <p>+1655-456-532</p>
            </div>
          </div>
          <div className={styles.infoItem}>
          <MdWatchLater className={styles.contactIcon}/>
            <div className={styles.flex}>
              <p>Man - Fre 09:00 - 18:00</p>
              <p>(except public holidays)</p>
            </div>
          </div>
          <div className={styles.infoItem}>
          <FaLocationDot className={styles.contactIcon}/>
            <div className={styles.flex}>
              <p>25/2 Lane2 Vokte Street Building</p>
              <p>Melborn City</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
