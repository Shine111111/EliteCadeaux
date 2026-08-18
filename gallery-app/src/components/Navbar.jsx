import styles from "./Navbar.module.css";
import logo from "../assets/logo.png"; // Replace with your exact filename/extension

export default function Navbar({ categories, activeCategory, onSelectCategory }) {
  return (
    <nav className={styles.navbar}>
      {/* Brand / Logo Section */}
      <div className={styles.brand}>
        <img src={logo} alt="Company Logo" className={styles.logo} />
        <span className={styles.brandName}>Elite Cadeaux</span> {/* Optional site title */}
      </div>

      {/* Nav Links / Buttons */}
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