// src/components/Navbar.jsx
import { useState } from "react";
import styles from "./Navbar.module.css";
import logo from "../assets/logo.png"; // Verify filename matches your file in src/assets

export default function Navbar({
  navSections,
  selectedFilter,
  onSelectCategory,
  onGoHome,
  currentView,
}) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const isAllActive = currentView === "items" && selectedFilter.section === null;

  const handleSelect = (section, sub) => {
    onSelectCategory(section, sub);
    setIsMobileOpen(false);
  };

  const handleHomeClick = () => {
    onGoHome();
    setIsMobileOpen(false);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          className={styles.mobileToggle}
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle navigation"
        >
          {isMobileOpen ? "✕" : "☰"}
        </button>

        {/* Brand Logo & Name */}
        <div className={styles.brand} onClick={handleHomeClick} role="button" tabIndex={0}>
          <img src={logo} alt="Elite Cadeaux Logo" className={styles.logo} />
          <span className={styles.brandName}>Elite Cadeaux</span>
        </div>

        {/* Navigation Links */}
        <div className={`${styles.navLinks} ${isMobileOpen ? styles.navOpen : ""}`}>
          {/* All items */}
          <div className={styles.navItem}>
            <button
              type="button"
              className={`${styles.navBtn} ${isAllActive ? styles.active : ""}`}
              onClick={() => handleSelect(null, null)}
            >
              All items
            </button>
          </div>

          {/* Categorized Dropdowns */}
          {navSections.map((section) => {
            const isSectionActive =
              currentView === "items" && selectedFilter.section === section.id;

            return (
              <div key={section.id} className={styles.navItem}>
                <button
                  type="button"
                  className={`${styles.navBtn} ${
                    isSectionActive && !selectedFilter.subcategory ? styles.active : ""
                  }`}
                  onClick={() => handleSelect(section.id, null)}
                >
                  {section.label}
                </button>

                {section.subcategories && section.subcategories.length > 0 && (
                  <div className={styles.dropdownMenu}>
                    {section.subcategories.map((sub) => {
                      const isSubActive =
                        currentView === "items" &&
                        selectedFilter.section === section.id &&
                        selectedFilter.subcategory === sub;

                      return (
                        <button
                          key={sub}
                          type="button"
                          className={`${styles.dropdownItem} ${
                            isSubActive ? styles.dropdownItemActive : ""
                          }`}
                          onClick={() => handleSelect(section.id, sub)}
                        >
                          {sub}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </nav>
    </header>
  );
}