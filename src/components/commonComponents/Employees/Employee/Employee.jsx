import styles from "./employee.module.css";

//Single Employee component
const Employee = ({ employee }) => {
  const { name, text, image } = employee;
  return (
    <div className={styles.employee} style={{ backgroundImage: `url(${image})` }}>
      <p className={styles.text}>{text}</p>
      <h3 className={styles.name}>{name}</h3>
    </div>
  );
};

export default Employee;
