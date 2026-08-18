import styles from "./ItemCard.module.css";

export default function ItemCard({ item }) {
  return (
    <div className={styles.card}>
      <img src={item.image} alt={item.name} className={styles.image} />
      <h4 className={styles.title}>{item.name}</h4>
      <span className={styles.badge}>{item.category}</span>
    </div>
  );
}