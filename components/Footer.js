import styles from "../styles/Footer.module.scss";

export const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <section className={styles.footer} id="footer">
      <div className={styles.container}>
        <h2 className={styles.heading}>Copyright {date} Ibnul Huq</h2>
      </div>
    </section>
  );
};
