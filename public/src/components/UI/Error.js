import styles from "./Error.module.css";

const Error = (props) => {
  return (
    <div className={styles["error"]}>
      <p>{props.error}</p>
    </div>
  );
};

export default Error;
