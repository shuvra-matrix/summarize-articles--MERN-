import { Fragment } from "react";
import styles from "./ResultSection.module.css";

const ResultSection = (props) => {
  return (
    <Fragment>
      <h3 className={styles["article-heading"]}>
        Article <span>Summary</span>
      </h3>
      <div className={styles["result-section"]}>
        <p>{props.result.summary}</p>
      </div>
    </Fragment>
  );
};

export default ResultSection;
