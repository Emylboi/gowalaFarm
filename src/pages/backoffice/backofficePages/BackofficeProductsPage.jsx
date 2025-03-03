import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import useTinyFetch from "../../../hooks/tinyFetch.hook";
import BoProductList from "../../../components/backoffice/Products/lists/BoProductList";

const BackofficeProductsPage = () => {
    const [products, setProducts] = useState([]); // State for products, empty array as default.
    const { data, fetchData } = useTinyFetch(); // Fetch data from the API server.
    const navigate = useNavigate();
    const { token } = useAuth(); // Get token from useAuth hook.
  
    const headers = {
      Authorization: `Bearer ${token}`, // Include token in Authorization header
    };
  
    useEffect(() => {
      fetchData("/products"); //Fetches products from the /products endpoint.
    }, []);
  
    useEffect(() => {
      setProducts(data); // Sets the products to the data we get from the endpoint API.
    }, [data]);
  
    // Function that adds a new product to the database.
    const addProduct = (formData) => {
      const addNewProduct = async (formData) => {
        let response = await fetch("http://localhost:3042/product", {
          // Fetches the data from the API server with the /product endpoint.
          method: "POST", // Method is POST, because we are posting data to the server.
          body: formData, // We are posting data from a form.
          headers,
        });
  
        // If the response is ok, we fetch the data again, and navigate to the /backoffice/products page.
        if (response.ok) {
          fetchData("/products");
          navigate(`/backoffice/products`);
        }
      };
  
      addNewProduct(formData);
    };
  
    // Function that deletes a product from the database.
    const deleteProduct = (id) => {
      const delProduct = async () => {
        // Fetches the data from the API server with the /product/:id endpoint.
        await fetch(`http://localhost:3042/product/${id}`, {
          method: "DELETE", // Method is DELETE, because we are deleting data from the server.
          headers,
        });
  
        fetchData("/products"); // Fetches the data again, to update the list of products.
      };
  
      delProduct(id);
    };
  
    // Function that updates a product in the database.
    const updateProduct = (formData) => {
      const editProduct = async (formData) => {
        let response = await fetch("http://localhost:3042/product", {
          // Fetches the data from the API server with the /product endpoint.
          method: "PUT", // Method is PUT, because we are updating data in the server.
          body: formData, // We are updating data from a form.
          headers,
        });
  
        const res = await response.json();
        // If the response is ok, we fetch the data again, and navigate to the /backoffice/products page.
        if ((res.status = "ok")) {
          fetchData("/products");
          navigate(`/backoffice/products`);
        }
      };
  
      editProduct(formData);
    };

  return (
    <div>
      <BoProductList
        products={products}
        deleteProduct={deleteProduct}
      ></BoProductList>
      <br />
      <br />
      <Outlet context={[products, addProduct, updateProduct]}></Outlet>
    </div>
  );
}

export default BackofficeProductsPage;