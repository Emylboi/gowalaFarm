import styles from "./card.module.css";

const Card = ({image, title, text}) => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <img src={image} alt="" />
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Card;
