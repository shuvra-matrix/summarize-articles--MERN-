import { Fragment, useState } from "react";
import styles from "./ResultSection.module.css";

const ResultSection = (props) => {
  const [isCopy, setCopy] = useState(false);

  const copyHandler = (e) => {
    navigator.clipboard.writeText(props.result.summary);
    setCopy(true);
    setTimeout(() => setCopy(false), 1000);
  };

  return (
    <Fragment>
      <h3 className={styles["article-heading"]}>
        Article <span>Summary</span>
      </h3>
      <div className={styles["result-section"]}>
        <p>{props.result.summary}</p>
        <img
          onClick={copyHandler}
          src="https://img.icons8.com/fluency/48/copy.png"
          alt="copy"
        />
        {isCopy && <p className={styles["copy-message"]}>Copy</p>}
      </div>
    </Fragment>
  );
};

export default ResultSection;
