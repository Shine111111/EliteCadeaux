// src/components/Footer.jsx
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* 1. About Us */}
        <div className={styles.column}>
          <h4 className={styles.heading}>About Us</h4>
          <p className={styles.text}>
            Elite Cadeaux offers curated gifts, home accents, and seasonal decor 
            crafted to elevate your everyday living spaces with elegance and charm.
          </p>
        </div>

        {/* 2. Contact Us */}
        <div className={styles.column}>
          <h4 className={styles.heading}>Contact Us</h4>
          <ul className={styles.list}>
            <li>
              <span>Email: </span>
              <a href="mailto:info@elitecadeaux.com" className={styles.link}>
                info@elitecadeaux.com
              </a>
            </li>
            <li>
              <span>Phone: </span>
              <a href="tel:+15140000000" className={styles.link}>
                +1 (514) 000-0000
              </a>
            </li>
            <li>Hours: Mon – Sat, 10:00 AM – 6:00 PM</li>
          </ul>
        </div>

        {/* 3. Where to Find Us (Address + Map) */}
        <div className={styles.column}>
          <h4 className={styles.heading}>Where to Find Us</h4>
          <p className={styles.address}>
            1234 Rue Sainte-Catherine Ouest<br />
            Montreal, QC H3G 1P1, Canada
          </p>
          <div className={styles.mapContainer}>
            <iframe
              title="Store Location"
              src="https://maps.google.com/maps?q=Montreal,%20QC&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="140"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* 4. Follow Us (Social Media Links) */}
        <div className={styles.column}>
          <h4 className={styles.heading}>Follow Us</h4>
          <div className={styles.socialIcons}>
            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className={styles.socialLink}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>

            {/* TikTok */}
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className={styles.socialLink}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 00-1-.08A6.34 6.34 0 003 15.66a6.34 6.34 0 0010.86 4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-.04-4.52z"/>
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className={styles.socialLink}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.7 5H18V0h-3.808C10.597 0 9 1.583 9 4.615V8z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Legal / Copyright Bar */}
      <div className={styles.bottomBar}>
        <p>© {new Date().getFullYear()} Elite Cadeaux. All rights reserved.</p>
      </div>
    </footer>
  );
}