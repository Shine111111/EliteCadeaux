import styles from "./Navbar.module.css";

export default function Navbar({ categories, activeCategory, onSelectCategory }) {
  return (
    <nav className={styles.navbar}>
      {categories.map((cat) => (
        <button
          key={cat}
          className={`${styles.navBtn} ${activeCategory === cat ? styles.active : ""}`}
          onClick={() => onSelectCategory(cat)}
        >
          {cat.charAt(0).toUpperCase() + cat.slice(1)}
        </button>
      ))}
    </nav>
  );
}