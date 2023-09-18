import styles from "./InputSection.module.css";

const InputSection = () => {
  return (
    <form method="POST">
      <input type="text" placeholder="Past Link Here"></input>
      <img
        className={styles.link}
        width="40"
        height="40"
        src="https://img.icons8.com/color/48/000000/link--v1.png"
        alt="link--v1"
      />
      <button type="submit">
        <img
          width="40"
          height="40"
          src="https://img.icons8.com/external-kmg-design-flat-kmg-design/64/000000/external-send-user-interface-kmg-design-flat-kmg-design.png"
          alt="external-send-user-interface-kmg-design-flat-kmg-design"
        />
      </button>
    </form>
  );
};

export default InputSection;
