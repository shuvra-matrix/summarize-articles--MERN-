import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles["header"]}>
      <a href="/">
        <h1>Synop</h1>
      </a>
      <a href="https://github.com/shuvra-matrix/summarize-articles--MERN-">
        <p>GitHub</p>
      </a>
    </header>
  );
};

export default Header;
