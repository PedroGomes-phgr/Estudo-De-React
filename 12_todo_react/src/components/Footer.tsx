import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>
          <span>TaskFlow</span> © 2026
        </p>

        <p className={styles.tech}>Desenvolvido com React + TypeScript</p>
      </div>
    </footer>
  );
};

export default Footer;
