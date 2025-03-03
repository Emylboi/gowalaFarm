import { useEffect, useRef, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import styles from "../../boForm.module.css";

const BoArticlesForm = () => {
  // We get the id from the URL.
  const { id } = useParams();

  // We reference to a form.
  const formRef = useRef();

  // We get the articles, addArticle and updateArticle from the context.
  const [articles, addArticle, updateArticle] = useOutletContext();

  // Determines whether we're in editmode or 'createmode' of an article. False as default.
  const [editMode, setEditMode] = useState(false);

  // useState for the article.
  const [article, setArticle] = useState(
    // If we have an id, we filter the articles and get the first one. Otherwise we set it to null.
    id ? articles?.filter((p) => p._id === id)[0] : null
  );

  // useState for the image, null as default value.
  const [image, setImage] = useState();

  useEffect(() => {
    //If we have an id, we find the article with that id, otherwise we set it to null.
    const foundArticle = id ? articles.find((p) => p._id === id) : null;

    // We set the article to the foundArticle.
    setArticle(foundArticle);

    // We set the editMode to true if we have an id, otherwise false.
    setEditMode(!!id);

    // The useEffect only runs when the id or articles change.
  }, [id, articles]);

  // Function that handles the change of the image.
  const onImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  // Function that handles the submit of the form.
  const onHandleSubmit = (e) => {
    e.preventDefault();

    // We create a new FormData object.
    let formData = new FormData();

    // We append the name and text to the formData.
    formData.append("title", article.title);
    formData.append("description", article.description);
    formData.append("list", article.list);

    // If we're in editMode, we append the id to the formData.
    editMode && formData.append("id", article?._id);

    // If we have an image, we append the image to the formData.
    image && formData.append("file", image);

    // If we're in editMode, we update the article, otherwise we add the article.
    editMode ? updateArticle(formData) : addArticle(formData);
  };

  return (
    <div className={styles.content}>
      <h2>{editMode ? "Redigér Article" : "Opret Article"}</h2>
      <form onSubmit={onHandleSubmit} ref={formRef} className={styles.form}>
        <label>
          <img
            src={
              image
                ? URL.createObjectURL(image)
                : "http://localhost:3042/articles/no-article.jpg"
            }
            width={200}
          ></img>
          <input className={styles.input} type="file" name={"file"} onChange={onImageChange}></input>
        </label>
        <label>
          {" "}
          Title
          <input
            className={styles.input}
            type="text"
            value={article?.title || ""}
            onChange={(e) =>
              setArticle({ ...article, title: e.target.value })
            }
          ></input>
        </label>
        <label>
          {" "}
          Description
          <input
            className={styles.input}
            type="text"
            value={article?.description || ""}
            onChange={(e) =>
              setArticle({ ...article, description: e.target.value })
            }
          ></input>
        </label>
        <label>
          {" "}
          List
          <input
            className={styles.input}
            type="text"
            value={article?.list || ""}
            onChange={(e) =>
              setArticle({ ...article, list: e.target.value })
            }
          ></input>
        </label>
      
        <div className={styles.buttons}>
          <button className={styles.button}>{editMode ? "Redigér Article" : "Opret Article"}</button>{" "}
          <button className={styles.button} type="reset">RESET</button>
        </div>
      </form>
    </div>
  );
};
export default BoArticlesForm;
