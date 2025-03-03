import { useNavigate } from "react-router-dom";
import styles from "./boProductList.module.css";
import Swal from "sweetalert2";

// This component shows the list of all our products in the backoffice section.
const BoProductList = ({ products, deleteProduct }) => {
  const navigate = useNavigate();

  // Function that navigates to the edit/update page of the product
  const editProduct = (id) => {
    navigate(`/backoffice/products/edit/${id}`);
  };

  // Function that navigates to the add/create page of the product
  const createProduct = () => {
    navigate(`/backoffice/products/add`);
  };

  const handleDelete = (id, title) => {
    Swal.fire({
      title: `Vil du slette produktet "${title}"?`,
      text: "Denne handling kan ikke fortrydes!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ja, slet produktet!",
      cancelButtonText: "Annuller",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteProduct(id);
        Swal.fire("Slettet!", "Produktet er blevet slettet.", "success");
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
            <th>price</th>
            <th>discount</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            let { _id, title, price, discount, image } = product;

            // Lists the information of each product in the backoffice section, based on id's
            return (
              <tr key={_id}>
                <td>
                  <img src={image}></img>
                </td>
                <td>{title}</td>
                <td>{price}</td>
                <td>{discount}</td>
                <td className={"table-actions"}>
                  <button onClick={() => editProduct(_id)}>REDIGÈR</button>{" "}
                  {/* Clicking the button, runs the editProduct function above. */}
                  <button onClick={() => handleDelete(_id, title)}>SLET</button>{" "}
                  {/* Clicking the button, runs the deleteProduct function that we get as a prop from BackofficeProductsPage. */}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button onClick={createProduct}>OPRET</button>{" "}
      {/* Clicking the button, runs the createProduct function above. */}
    </div>
  );
};
export default BoProductList;
