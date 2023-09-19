import { useState } from "react";
import styles from "./InputSection.module.css";

const InputSection = (props) => {
  const [userInput, setUserInput] = useState("");
  const [placeHolder, setPlaceHolder] = useState("Past Link Here");
  const [isInputError, setInputError] = useState(false);

  const userInputHandler = (event) => {
    setUserInput(event.target.value);
    setInputError(false);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (userInput.length < 4) {
      setInputError(true);
      props.inputHandler("error");
    } else {
      props.inputHandler(userInput);
      setPlaceHolder(userInput);
      setUserInput("");
    }
  };

  return (
    <form method="POST" onSubmit={onSubmitHandler}>
      <input
        className={isInputError ? styles["invalid"] : ""}
        type="text"
        value={userInput}
        placeholder={placeHolder}
        onChange={userInputHandler}
      ></input>
      <img
        className={styles.link}
        src="https://img.icons8.com/color/48/000000/link--v1.png"
        alt="link--v1"
      />
      <button type="submit">
        <img
          src="https://img.icons8.com/external-kmg-design-flat-kmg-design/64/000000/external-send-user-interface-kmg-design-flat-kmg-design.png"
          alt="external-send-user-interface-kmg-design-flat-kmg-design"
        />
      </button>
    </form>
  );
};

export default InputSection;
