import ItemCard from "./ItemCard";
import styles from "./Gallery.module.css";

export default function Gallery({ items }) {
  if (items.length === 0) {
    return <p className={styles.empty}>No items found in this category.</p>;
  }

  return (
    <div className={styles.grid}>
      {items.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  );
}