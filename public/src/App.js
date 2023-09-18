import styles from "./App.module.css";
import Header from "./components/Layout/Header";
import IndexMessage from "./components/Layout/IndexMessage";
import UserInput from "./components/UserInput/UserInput";

function App() {
  return (
    <div className={styles["App"]}>
      <Header />
      <IndexMessage />
      <UserInput />
    </div>
  );
}

export default App;
