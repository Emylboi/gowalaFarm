import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import useTinyFetch from "../../../hooks/tinyFetch.hook";
import BoOrderList from "../../../components/backoffice/Orders/lists/BoOrderList";


const BackofficeOrdersPage = () => {
    const [orders, setOrders] = useState([]); // State for orders, empty array as default.
    const { data, fetchData } = useTinyFetch(); // Fetch data from the API server.
    const navigate = useNavigate();
    const { token } = useAuth(); // Get token from useAuth hook.
  
    const headers = {
      Authorization: `Bearer ${token}`, // Include token in Authorization header
    };
  
    useEffect(() => {
      fetchData("/orders"); //Fetches orders from the /orders endpoint.
    }, []);
  
    useEffect(() => {
      setOrders(data); // Sets the orders to the data we get from the endpoint API.
    }, [data]);
  
    // Function that adds a new order to the database.
    const addOrder = (formData) => {
      const addNewOrder = async (formData) => {
        let response = await fetch("http://localhost:3042/order", {
          // Fetches the data from the API server with the /order endpoint.
          method: "POST", // Method is POST, because we are posting data to the server.
          body: formData, // We are posting data from a form.
          headers,
        });
  
        // If the response is ok, we fetch the data again, and navigate to the /backoffice/orders page.
        if (response.ok) {
          fetchData("/orders");
          navigate(`/backoffice/orders`);
        }
      };
  
      addNewOrder(formData);
    };
  
    // Function that deletes a order from the database.
    const deleteOrder = (id) => {
      const delOrder = async () => {
        // Fetches the data from the API server with the /order/:id endpoint.
        await fetch(`http://localhost:3042/order/${id}`, {
          method: "DELETE", // Method is DELETE, because we are deleting data from the server.
          headers,
        });
  
        fetchData("/orders"); // Fetches the data again, to update the list of orders.
      };
  
      delOrder(id);
    };
  
    // Function that updates a order in the database.
    const updateOrder = (formData) => {
      const editOrder = async (formData) => {
        let response = await fetch("http://localhost:3042/order", {
          // Fetches the data from the API server with the /order endpoint.
          method: "PUT", // Method is PUT, because we are updating data in the server.
          body: formData, // We are updating data from a form.
          headers,
        });
  
        const res = await response.json();
        // If the response is ok, we fetch the data again, and navigate to the /backoffice/orders page.
        if ((res.status = "ok")) {
          fetchData("/orders");
          navigate(`/backoffice/orders`);
        }
      };
  
      editOrder(formData);
    };

  return (
    <div>
      <BoOrderList
        orders={orders}
        deleteOrder={deleteOrder}
      ></BoOrderList>
      <br />
      <br />
      <Outlet context={[orders, addOrder, updateOrder]}></Outlet>
    </div>
  );
}

export default BackofficeOrdersPage;