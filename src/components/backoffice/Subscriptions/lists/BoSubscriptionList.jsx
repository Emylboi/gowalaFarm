import { useNavigate } from "react-router-dom";
import styles from "./boSubscriptionList.module.css";
import Swal from "sweetalert2";

// This component shows the list of all our subscriptions in the backoffice section.
const BoSubscriptionList = ({ subscriptions, deleteSubscription }) => {
  const navigate = useNavigate();

  // Function that navigates to the edit/update page of the subscription
  const editSubscription = (id) => {
    navigate(`/backoffice/subscriptions/edit/${id}`);
  };

  // Function that navigates to the add/create page of the subscription
  const createSubscription = () => {
    navigate(`/backoffice/subscriptions/add`);
  };

  const handleDelete = (id, title) => {
    Swal.fire({
      title: `Vil du slette, "${email}"?`,
      text: "Denne handling kan ikke fortrydes!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ja, slet den subscriberen!",
      cancelButtonText: "Annuller",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteSubscription(id);
        Swal.fire("Slettet!", "Subscriberen er blevet slettet.", "success");
      }
    });
  };

  return (
    <div className={styles.list}>
      <table>
        <thead>
          <tr>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
          {subscriptions.map((subscription) => {
            let { _id, email } = subscription;

            // Lists the information of each subscription in the backoffice section, based on id's
            return (
              <tr key={_id}>
                <td>{email}</td>
                <td className={"table-actions"}>
                  {/* <button onClick={() => editSubscription(_id)}>REDIGÈR</button>{" "} */}

                  <button onClick={() => handleDelete(_id, email)}>SLET</button>{" "}
                  {/* Clicking the button, runs the deleteSubscription function that we get as a prop from BackofficeSubscriptionsPage. */}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button onClick={createSubscription}>OPRET</button>{" "}
      {/* Clicking the button, runs the createSubscription function above. */}
    </div>
  );
};
export default BoSubscriptionList;
