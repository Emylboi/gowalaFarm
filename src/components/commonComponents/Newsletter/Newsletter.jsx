import styles from "./newsletter.module.css";

const Newsletter = () => {

    return(
        <section className={styles.container}>
            <div className={styles.background}>
                <div className={styles.text}>
                    <h2 className={styles.boldTitle}>Nyhedsbrev</h2>
                    <h2 className={styles.greenTitle}>Få nyhederne fra gården på din mail.</h2>
                    <p>Tilmeld dig vores nyhedsbrev - så kan du altid følge med i, hvad der sker på farmen.</p>
                </div>
                <div className={styles.form}>
                    <input type="email" placeholder="Din email" />
                    <button className={styles.button}>Tilmeld</button>
                </div>
            </div>
        </section>
    )

}

export default Newsletter;