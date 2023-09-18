import InputSection from "./InputSection";
import ResultSection from "./ResultSection";
import styles from "./UserInput.module.css";
import Error from "../UI/Error";
import Loader from "../UI/Loader";

const UserInput = () => {
  return (
    <div className={styles["userinput"]}>
      <InputSection />
      <Loader />
      <Error />
      <ResultSection />
    </div>
  );
};

export default UserInput;
