import styles from "/src/pages/NotFound/NotFound.module.css";

function NotFound() {
  return (
    <section className={styles.container}>
      <h2 className={styles.error}>404</h2>
      <p className={styles.text_error}>Not found</p>
    </section>
  );
}

export default NotFound;
