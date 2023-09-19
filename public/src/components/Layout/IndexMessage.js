import styles from "./IndexMessage.module.css";
import { useContext } from "react";

const IndexMessage = () => {
  return (
    <div className={styles["index-message-main"]}>
      <h1>
        Summarize Articles with
        <span> OpenAI Chat GPT </span>
      </h1>
      <p>
        Synop is the ultimate web app that simplifies your online reading
        experience. Summarize any article from a URL with ease, save time, and
        stay informed. Try Safu today for efficient, on-the-go content
        consumption!
      </p>
    </div>
  );
};

export default IndexMessage;
