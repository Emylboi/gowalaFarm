import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import useTinyFetch from "../../../hooks/tinyFetch.hook";
import BoSubscriptionList from "../../../components/backoffice/Subscriptions/lists/BoSubscriptionList";



const BackofficeSubscriptionsPage = () => {
    const [subscriptions, setSubscriptions] = useState([]); // State for subscriptions, empty array as default.
    const { data, fetchData } = useTinyFetch(); // Fetch data from the API server.
    const navigate = useNavigate();
    const { token } = useAuth(); // Get token from useAuth hook.
  
    const headers = {
      Authorization: `Bearer ${token}`, // Include token in Authorization header
    };
  
    useEffect(() => {
      fetchData("/subscriptions"); //Fetches subscriptions from the /subscriptions endpoint.
    }, []);
  
    useEffect(() => {
      setSubscriptions(data); // Sets the subscriptions to the data we get from the endpoint API.
    }, [data]);
  
    // Function that adds a new subscription to the database.
    const addSubscription = (formData) => {
      const addNewSubscription = async (formData) => {
        let response = await fetch("http://localhost:3042/subscription", {
          // Fetches the data from the API server with the /subscription endpoint.
          method: "POST", // Method is POST, because we are posting data to the server.
          body: formData, // We are posting data from a form.
          headers,
        });
  
        // If the response is ok, we fetch the data again, and navigate to the /backoffice/subscriptions page.
        if (response.ok) {
          fetchData("/subscriptions");
          navigate(`/backoffice/subscriptions`);
        }
      };
  
      addNewSubscription(formData);
    };
  
    // Function that deletes a subscription from the database.
    const deleteSubscription = (id) => {
      const delSubscription = async () => {
        // Fetches the data from the API server with the /subscription/:id endpoint.
        await fetch(`http://localhost:3042/subscription/${id}`, {
          method: "DELETE", // Method is DELETE, because we are deleting data from the server.
          headers,
        });
  
        fetchData("/subscriptions"); // Fetches the data again, to update the list of subscriptions.
      };
  
      delSubscription(id);
    };
  
    /* // Function that updates a subscription in the database.
    const updateSubscription = (formData) => {
      const editSubscription = async (formData) => {
        let response = await fetch("http://localhost:3042/subscription", {
          // Fetches the data from the API server with the /subscription endpoint.
          method: "PUT", // Method is PUT, because we are updating data in the server.
          body: formData, // We are updating data from a form.
          headers,
        });
  
        const res = await response.json();
        // If the response is ok, we fetch the data again, and navigate to the /backoffice/subscriptions page.
        if ((res.status = "ok")) {
          fetchData("/subscriptions");
          navigate(`/backoffice/subscriptions`);
        }
      };
  
      editSubscription(formData);
    }; */

  return (
    <div>
      <BoSubscriptionList
        subscriptions={subscriptions}
        deleteSubscription={deleteSubscription}
      ></BoSubscriptionList>
      <br />
      <br />
      <Outlet context={[subscriptions, addSubscription, /* updateSubscription */]}></Outlet>
    </div>
  );
}

export default BackofficeSubscriptionsPage;