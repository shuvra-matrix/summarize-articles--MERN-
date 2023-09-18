import styles from "./App.module.css";
import Header from "./components/Layout/Header";
import IndexMessage from "./components/Layout/IndexMessage";

function App() {
  return (
    <div className={styles["App"]}>
      <Header />
      <IndexMessage />
    </div>
  );
}

export default App;
