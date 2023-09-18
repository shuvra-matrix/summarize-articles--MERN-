import InputSection from "./InputSection";
import ResultSection from "./ResultSection";
import styles from "./UserInput.module.css";

const UserInput = () => {
  return (
    <div className={styles["userinput"]}>
      <InputSection />
      <ResultSection />
    </div>
  );
};

export default UserInput;
