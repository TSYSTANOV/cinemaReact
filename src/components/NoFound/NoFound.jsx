import styles from "./NoFound.module.css";

function NoFound({ search }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Nothing found on your search: {search}</h2>
    </div>
  );
}
export { NoFound };
