import { IoMdCheckmarkCircle } from "react-icons/io";
import styles from "./article.module.css";

//Single Article
const Article = ({ article }) => {
  const { title, description, list, image } = article;
  return (
    <div className={styles.article}>
      <div className={styles.content}>
        <img src={image} className={styles.image} alt="" />
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <ul className={styles.list}>
          {list.map((item, index) => (
            <div key={index} className={styles.listItem}>
                <IoMdCheckmarkCircle  className={styles.checkmark}/>
                <li key={index}>{item}</li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Article;
