import InputSection from "./InputSection";
import ResultSection from "./ResultSection";
import styles from "./UserInput.module.css";
import Error from "../UI/Error";
import Loader from "../UI/Loader";
import { useState } from "react";

const UserInput = () => {
  const [isLoader, setLoader] = useState(false);
  const [isError, setError] = useState(false);
  const [resultData, setResultData] = useState(null);
  const [errorData, setErrorData] = useState("");

  const errorHandler = (error) => {
    setLoader(false);
    setError(true);
    setResultData(null);
    setErrorData(error);
  };

  const userInputHandler = async (userInput) => {
    const pattern = /^(https:\/\/|http:\/\/)/;
    if (userInput === "error" || !pattern.test(userInput)) {
      errorHandler("Please enter a valid URL.");
    } else {
      setLoader(true);
      setResultData(null);

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          urls: userInput,
        }),
      };
      const url = "http://localhost:3030/api/v1/";
      try {
        const response = await fetch(url, options);
        const result = await response.json();

        if (result.status === "fail") {
          errorHandler(result.error);
        } else if (
          result.summary === "Cannot retrieve summary. Reason: Text is empty"
        ) {
          errorHandler("This URL does not contain any articles.");
        } else {
          setError(false);
          setLoader(false);
          setResultData(result);
        }
      } catch (err) {
        errorHandler("An unexpected error occurred. Please try again later.");
      }
    }
  };

  return (
    <div className={styles["userinput"]}>
      <InputSection inputHandler={userInputHandler} />
      {isLoader && <Loader />}
      {isError && <Error error={errorData} />}
      {resultData && <ResultSection result={resultData} />}
    </div>
  );
};

export default UserInput;
