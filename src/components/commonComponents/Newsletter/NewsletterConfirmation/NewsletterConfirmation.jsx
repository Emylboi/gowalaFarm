import styles from "./newsletterConfirmation.module.css"

const NewsletterConfirmation = ({email}) => {
    return(
        <section className={styles.container}>
            <div className={styles.background}>
                <div className={styles.content}>
                    <h3 className={styles.thankYouName}>Tak <span className={styles.green}>{email}!</span></h3>
                    <p className={styles.newsletterConfirm}>Du har nu tilmeldt dig vores nyhedsbrev</p>
                </div>
            </div>
        </section>
    )
}

export default NewsletterConfirmation;