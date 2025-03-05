import { useNavigate } from "react-router-dom";
import styles from "./boUserList.module.css";
import Swal from "sweetalert2";
const BoUserList = ({ users, deleteUser }) => {
  const navigate = useNavigate();

  const editUser = (id) => {
    navigate(`/backoffice/users/edit/${id}`);
  };

  const createUser = () => {
    navigate(`/backoffice/users/add`);
  };

  const handleDelete = (id, name) => {
    Swal.fire({
      title: `Vil du slette brugeren "${name}"?`,
      text: "Denne handling kan ikke fortrydes!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ja, slet brugeren!",
      cancelButtonText: "Annuller",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteUser(id);
        Swal.fire("Slettet!", "Brugeren er blevet slettet.", "success");
      }
    });
  };

  return (
    <div className={styles.list}>
      <table>
        <thead>
          <tr>
            <th>image</th>
            <th>name</th>
            <th>password</th>
            <th>email</th>
            <th>role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            let { _id, name, password, email, picture, role } = user;

            return (
              <tr key={_id}>
                <td>
                  <img src={picture}></img>
                </td>
                <td>{name}</td>
                <td>{password}</td>
                <td>{email}</td>
                <td>{role}</td>
                <td className={"table-actions"}>
                  <button onClick={() => editUser(_id)}>REDIGÈR</button>
                  <button onClick={() => handleDelete(_id, name)}>SLET</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button onClick={createUser}>OPRET</button>
    </div>
  );
};
export default BoUserList;
