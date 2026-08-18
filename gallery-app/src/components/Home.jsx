// src/components/Home.jsx
import styles from "./Home.module.css";

export default function Home() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Welcome to Our Showcase</h1>
      <p className={styles.lead}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <p className={styles.bodyText}>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
        eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
        in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </main>
  );
}