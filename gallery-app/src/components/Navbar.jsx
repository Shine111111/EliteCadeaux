// src/components/Navbar.jsx
import styles from "./Navbar.module.css";
import logo from "../assets/logo.png";

export default function Navbar({ 
  categories, 
  activeCategory, 
  onSelectCategory, 
  onGoHome, 
  currentView 
}) {
  return (
    <nav className={styles.navbar}>
      {/* Brand logo & text triggers the Home view */}
      <div className={styles.brand} onClick={onGoHome} role="button" tabIndex={0}>
        <img src={logo} alt="Logo" className={styles.logo} />
        <span className={styles.brandName}>Elite Cadeaux</span>
      </div>

      <div className={styles.navLinks}>
        {categories.map((cat) => {
          const isActive = currentView === "items" && activeCategory === cat;
          return (
            <button
              key={cat}
              className={`${styles.navBtn} ${isActive ? styles.active : ""}`}
              onClick={() => onSelectCategory(cat)}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          );
        })}
      </div>
    </nav>
  );
}