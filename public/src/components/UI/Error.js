import styles from "./Error.module.css";

const Error = (props) => {
  return (
    <div className={styles["error"]}>
      <p>Something went wrong. Please Try again later</p>
    </div>
  );
};

export default Error;
