import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <div className={styles.logoIcon}>
            <i className="bi bi-check2"></i>
          </div>

          <div className={styles.brand}>
            <h1>TaskFlow</h1>
            <p>Organize seu dia, uma tarefa de cada vez</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
