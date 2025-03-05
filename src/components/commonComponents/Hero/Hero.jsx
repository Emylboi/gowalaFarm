import styles from "./hero.module.css"

const Hero = ({title, text}) => {
    return(
        <section className={styles.container}>
            <div className={styles.content}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.text}>{text}</p>
            </div>
        </section>
    )
}

export default Hero;