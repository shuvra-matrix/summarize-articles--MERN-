import { Fragment } from "react";
import styles from "./ResultSection.module.css";

const ResultSection = (props) => {
  return (
    <Fragment>
      <h3 className={styles["article-heading"]}>
        Article <span>Summary</span>
      </h3>
      <div className={styles["result-section"]}>
        <p>
          Whether you’re new to the field or a seasoned professional, mastering
          the basics in Microsoft Azure can help you jump-start your career and
          prepare you to dive deeper into the many technical opportunities Azure
          offers. As a candidate for this certification, you can describe Azure
          architectural components and Azure services, such as compute,
          networking, and storage, as well as features and tools to secure,
          govern, and administer Azure. The Microsoft Certified: Azure
          Fundamentals certification could be a great fit for you if you’d like
          to: Prove your knowledge of cloud computing concepts, models, and
          services, such as public, private, and hybrid cloud, in addition to
          infrastructure as a service (IaaS), platform as a service (PaaS), and
          software as a service (SaaS). You can use your Azure Fundamentals
          certification to reinforce your basics for other Azure role-based or
          specialty certifications, but it isn’t a prerequisite for any of them.
          Or find the right Microsoft Azure certification for you, based on your
          profession (or the one you aspire to).
        </p>
      </div>
    </Fragment>
  );
};

export default ResultSection;
