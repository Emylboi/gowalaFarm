import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import useTinyFetch from "../../../hooks/tinyFetch.hook";
import BoArticleList from "../../../components/backoffice/Articles/lists/BoArticleList";


const BackofficeArticlesPage = () => {
    const [articles, setArticles] = useState([]); // State for articles, empty array as default.
    const { data, fetchData } = useTinyFetch(); // Fetch data from the API server.
    const navigate = useNavigate();
    const { token } = useAuth(); // Get token from useAuth hook.
  
    const headers = {
      Authorization: `Bearer ${token}`, // Include token in Authorization header
    };
  
    useEffect(() => {
      fetchData("/articles"); //Fetches articles from the /articles endpoint.
    }, []);
  
    useEffect(() => {
      setArticles(data); // Sets the articles to the data we get from the endpoint API.
    }, [data]);
  
    // Function that adds a new article to the database.
    const addArticle = (formData) => {
      const addNewArticle = async (formData) => {
        let response = await fetch("http://localhost:3042/article", {
          // Fetches the data from the API server with the /article endpoint.
          method: "POST", // Method is POST, because we are posting data to the server.
          body: formData, // We are posting data from a form.
          headers,
        });
  
        // If the response is ok, we fetch the data again, and navigate to the /backoffice/articles page.
        if (response.ok) {
          fetchData("/articles");
          navigate(`/backoffice/articles`);
        }
      };
  
      addNewArticle(formData);
    };
  
    // Function that deletes a article from the database.
    const deleteArticle = (id) => {
      const delArticle = async () => {
        // Fetches the data from the API server with the /article/:id endpoint.
        await fetch(`http://localhost:3042/article/${id}`, {
          method: "DELETE", // Method is DELETE, because we are deleting data from the server.
          headers,
        });
  
        fetchData("/articles"); // Fetches the data again, to update the list of articles.
      };
  
      delArticle(id);
    };
  
    // Function that updates a article in the database.
    const updateArticle = (formData) => {
      const editArticle = async (formData) => {
        let response = await fetch("http://localhost:3042/article", {
          // Fetches the data from the API server with the /article endpoint.
          method: "PUT", // Method is PUT, because we are updating data in the server.
          body: formData, // We are updating data from a form.
          headers,
        });
  
        const res = await response.json();
        // If the response is ok, we fetch the data again, and navigate to the /backoffice/articles page.
        if ((res.status = "ok")) {
          fetchData("/articles");
          navigate(`/backoffice/articles`);
        }
      };
  
      editArticle(formData);
    };

  return (
    <div>
      <BoArticleList
        articles={articles}
        deleteArticle={deleteArticle}
      ></BoArticleList>
      <br />
      <br />
      <Outlet context={[articles, addArticle, updateArticle]}></Outlet>
    </div>
  );
}

export default BackofficeArticlesPage;