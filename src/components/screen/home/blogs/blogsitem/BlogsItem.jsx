import styles from "./BlogsItem.module.css"

export default function BlogsItem ({title, description}){
  return(
    <li className={styles.blogs__item}>
      <strong>{title}</strong>
      
      {description}
    </li>
  );
}