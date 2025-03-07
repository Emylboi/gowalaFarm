import { useEffect, useState } from "react";
import useTinyFetch from "../../../hooks/tinyFetch.hook";
import Article from "./Article/Article";
import styles from "./articles.module.css";

//All Articles
const Articles = () => {
  const [articles, setArticles] = useState([]);

  const { data, fetchData, loading, error, noDataMessage } = useTinyFetch();

  useEffect(() => {
    fetchData("/articles");
  }, []);

  useEffect(() => {
    setArticles(data);
  }, [data]);

  return (
    <div className={styles.articles}>
      {loading && <p>Loading...</p>}

      {noDataMessage && <p>{noDataMessage}</p>}

      {articles.length > 0 &&
        articles
        //Filter out the Article that is used on the"About Us" page.
          .filter((article) => article.title !== "Om Gowala Farms")
          .map((article) => <Article key={article._id} article={article} />)}
    </div>
  );
};

export default Articles;
