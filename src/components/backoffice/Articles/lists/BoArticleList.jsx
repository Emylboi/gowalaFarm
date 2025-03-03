import { useNavigate } from "react-router-dom";
import styles from "./boArticleList.module.css";
import Swal from "sweetalert2";

// This component shows the list of all our articles in the backoffice section.
const BoArticleList = ({ articles, deleteArticle }) => {
  const navigate = useNavigate();

  // Function that navigates to the edit/update page of the article
  const editArticle = (id) => {
    navigate(`/backoffice/articles/edit/${id}`);
  };

  // Function that navigates to the add/create page of the article
  const createArticle = () => {
    navigate(`/backoffice/articles/add`);
  };

  const handleDelete = (id, title) => {
    Swal.fire({
      title: `Vil du slette, "${title}"?, fra databasen?`,
      text: "Denne handling kan ikke fortrydes!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ja, slet artiklen!",
      cancelButtonText: "Annuller",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteArticle(id);
        Swal.fire("Slettet!", "Artiklen er blevet slettet.", "success");
      }
    });
  };

  return (
    <div className={styles.list}>
      <table>
        <thead>
          <tr>
            <th>image</th>
            <th>title</th>
            <th>description</th>
            <th>list</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((article) => {
            let { _id, title, description, list, image } = article;

            // Lists the information of each article in the backoffice section, based on id's
            return (
              <tr key={_id}>
                <td>
                  <img src={image}></img>
                </td>
                <td>{title}</td>
                <td>{description}</td>
                <td>{list}</td>
                <td className={"table-actions"}>
                  <button onClick={() => editArticle(_id)}>REDIGÈR</button>{" "}
                  {/* Clicking the button, runs the editArticle function above. */}
                  <button onClick={() => handleDelete(_id, title)}>SLET</button>{" "}
                  {/* Clicking the button, runs the deleteArticle function that we get as a prop from BackofficeArticlesPage. */}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button onClick={createArticle}>OPRET</button>{" "}
      {/* Clicking the button, runs the createArticle function above. */}
    </div>
  );
};
export default BoArticleList;
