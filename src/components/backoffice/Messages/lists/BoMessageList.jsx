import styles from "./boMessageList.module.css";
import Swal from "sweetalert2";

// This component shows the list of all our messages in the backoffice section.
const BoMessageList = ({ messages, deleteMessage }) => {
  const handleDelete = (id, name) => {
    Swal.fire({
      title: `Vil du slette fra "${name}"??`,
      text: "Denne handling kan ikke fortrydes!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ja, slet beskeden!",
      cancelButtonText: "Annuller",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteMessage(id);
        Swal.fire("Slettet!", "Beskeden er blevet slettet.", "success");
      }
    });
  };

  return (
    <div className={styles.list}>
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>email</th>
            <th>description</th>
          </tr>
        </thead>
        <tbody>
          {messages.map((message) => {
            let { _id, name, email, description } = message;

            // Lists the information of each message in the backoffice section, based on id's
            return (
              <tr key={_id}>
                <td>{name}</td>
                <td>{email}</td>
                <td>{description}</td>
                <td className={"table-actions"}>
                  <button onClick={() => handleDelete(_id, name)}>SLET</button>{" "}
                  {/* Clicking the button, runs the deleteMessage function that we get as a prop from BackofficeMessagesPage. */}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default BoMessageList;
