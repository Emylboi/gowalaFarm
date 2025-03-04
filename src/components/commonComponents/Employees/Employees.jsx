import { useEffect, useState } from "react";
import Employee from "./Employee/Employee";
import useTinyFetch from "../../../hooks/tinyFetch.hook";
import styles from "./employees.module.css";

const Employees = () => {
  const [employees, setEmployees] = useState([]);

  const { data, fetchData, loading, error, noDataMessage } = useTinyFetch();

  useEffect(() => {
    fetchData("/employees");
  }, []);

  useEffect(() => {
    setEmployees(data);
  }, [data]);

  return (
    <div className={styles.employees}>
      {loading && <p>Loading...</p>}

      {noDataMessage && <p>{noDataMessage}</p>}

      {employees.length > 0 &&
        employees.map((employee) => (
          <Employee key={employee._id} employee={employee} />
        ))}
    </div>
  );
};

export default Employees;
