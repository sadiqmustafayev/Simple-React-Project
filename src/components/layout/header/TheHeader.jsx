import styles from "./Header.module.css"


export default function TheHeader(){
  return(
    <header className={styles.header}>
    <h2>Logo</h2>
    <span>Menu</span>
  </header>
  );
}
