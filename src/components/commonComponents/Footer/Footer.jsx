import styles from "./footer.module.css";

const Footer = () => {
  return (
    <section className={styles.container}>
      <div className={styles.topPart}>
        <img src="/logo.png" alt="" />
        <p className={styles.text}>
          Gowala Farms er en dedikeret gård, der producerer friske
          mejeriprodukter og kvalitetskød med fokus på dyrevelfærd,
          bæredygtighed og autentisk smag.
        </p>
        <div className={styles.info}>
          <div className={styles.infoItem}>
            <img src="/logo.png" alt="" />
            <div className={styles.flex}>
              <p>+88130-589-745-6987</p>
              <p>+1655-456-532</p>
            </div>
          </div>
          <div className={styles.infoItem}>
            <img src="/logo.png" alt="" />
            <div className={styles.flex}>
              <p>Man - Fre 09:00 - 18:00</p>
              <p>(undtagen helligdage)</p>
            </div>
          </div>
          <div className={styles.infoItem}>
            <img src="/logo.png" alt="" />
            <div className={styles.flex}>
              <p>Mejerigade 14</p>
              <p>Mejeby</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.buttomPart}></div>
      <div className={styles.rights}>
        <div className={styles.rightsContent}>
          &copy; 2024 <span className={styles.green}>Gowala</span> All Rights
          Reserved By
          <span className={styles.green}> LabArtisan</span> &
          <span className={styles.green}> Viborg Media College</span>
        </div>
      </div>
    </section>
  );
};

export default Footer;
