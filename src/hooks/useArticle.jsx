import { useEffect, useState } from "react";
import useTinyFetch from "./tinyFetch.hook";

// Used to fetch the one article that is used on About page.
const useArticle = (title) => {
  const [article, setArticle] = useState(null);
  const { data, fetchData, loading, error, noDataMessage } = useTinyFetch();

  useEffect(() => {
    fetchData("/articles");
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      setArticle(data.find((article) => article.title === title));
    }
  }, [data, title]);

  return { article, loading, error, noDataMessage };
};

export default useArticle;
