
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import useTinyFetch from "../../../hooks/tinyFetch.hook";
import useAuth from "../../../hooks/useAuth";
import BoUserList from "../../../components/backoffice/Users/lists/BoUserList";



const BackofficeUsersPage = () => {
  const [users, setUsers] = useState([]);
  const { data, fetchData } = useTinyFetch();
  const navigate = useNavigate();
  const { token } = useAuth();

  const headers = {
    "Authorization": `Bearer ${token}`, // Include token in Authorization header
  };

  useEffect(() => {
    fetchData("/users");
  }, []);

  useEffect(() => {
    setUsers(data);
  }, [data]);

  const addUser = (formData) => {
    const addNewUser = async (formData) => {
      let response = await fetch("http://localhost:3042/user", {
        method: "POST",
        body: formData,
      });
      /*       const result = await response.json(); */
      if (response.ok) {
        fetchData("/users");
        navigate(`/backoffice/users`);
      }
    };

    addNewUser(formData);
  };

  const deleteUser = (id) => {
    const delUser = async () => {
      await fetch(`http://localhost:3042/user/${id}`, {
        method: "DELETE",
        headers,
      });

      fetchData("/users");
    };

    delUser();
  };

  const updateUser = (formData) => {
    const editUser = async (formData) => {
      let response = await fetch("http://localhost:3042/user", {
        method: "PUT",
        body: formData,
        headers,
      });

      /*  const res = await response.json(); */
      if (response.ok) {
        fetchData("/users");
        navigate(`/backoffice/users`);
      }
    };

    editUser(formData);
  };

  return (
    <div>
      <BoUserList users={users} deleteUser={deleteUser}></BoUserList>
      <br />
      <br />
      <Outlet context={[users, addUser, updateUser]}></Outlet>
    </div>
  );
};
export default BackofficeUsersPage;
