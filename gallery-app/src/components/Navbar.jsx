import styles from "./Navbar.module.css";
import logo from "../assets/logo.png";

export default function Navbar({ categories, activeCategory, onSelectCategory }) {
  return (
    <nav className={styles.navbar}>
      <div className={styles.brand} onClick={() => onSelectCategory("all")}>
        <img src={logo} alt="Logo" className={styles.logo} />
        <span className={styles.brandName}>Elite Cadeaux</span>
      </div>

      <div className={styles.navLinks}>
        {categories.map((cat) => (
          <button
            key={cat}
            className={`${styles.navBtn} ${activeCategory === cat ? styles.active : ""}`}
            onClick={() => onSelectCategory(cat)}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>
    </nav>
  );
}