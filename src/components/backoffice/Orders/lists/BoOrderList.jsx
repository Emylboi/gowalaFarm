import { useNavigate } from "react-router-dom";
import styles from "./boOrderList.module.css";
import Swal from "sweetalert2";

// This component shows the list of all our orders in the backoffice section.
const BoOrderList = ({ orders, deleteOrder }) => {
  const navigate = useNavigate();

  // Function that navigates to the edit/update page of the order
  const editOrder = (id) => {
    navigate(`/backoffice/orders/edit/${id}`);
  };

  // Function that navigates to the add/create page of the order
  const createOrder = () => {
    navigate(`/backoffice/orders/add`);
  };

  const handleDelete = (id, email) => {
    Swal.fire({
      title: `Vil du slette ordren fra "${email}"?`,
      text: "Denne handling kan ikke fortrydes!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ja, slet den ordren!",
      cancelButtonText: "Annuller",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteOrder(id);
        Swal.fire("Slettet!", "Ordren er blevet slettet.", "success");
      }
    });
  };

  return (
    <div className={styles.list}>
      <table>
        <thead>
          <tr>
            <th>email</th>
            <th>items</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => {
            let { _id, email, items } = order;

            // Lists the information of each order in the backoffice section, based on id's
            return (
              <tr key={_id}>
                <td>{email}</td>
                <td>{items}</td>
                <td className={"table-actions"}>
                  <button onClick={() => editOrder(_id)}>REDIGÈR</button>{" "}
                  {/* Clicking the button, runs the editOrder function above. */}
                  <button onClick={() => handleDelete(_id, email)}>SLET</button>{" "}
                  {/* Clicking the button, runs the deleteOrder function that we get as a prop from BackofficeOrdersPage. */}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button onClick={createOrder}>OPRET</button>{" "}
      {/* Clicking the button, runs the createOrder function above. */}
    </div>
  );
};
export default BoOrderList;
