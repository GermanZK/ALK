import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.hero}>
      <section>
        <h1>ALK — catalog starter kit</h1>
        <p>
          The project is prepared with Next.js and TypeScript. This area will
          host the catalog showcase and future data-driven functionality.
        </p>
        <div className={styles.heroActions}>
          <Link className={styles.primary} href="/catalog">
            Open catalog
          </Link>
          <Link className={styles.secondary} href="#about">
            Learn more
          </Link>
        </div>
      </section>
      <section id="about">
        <h2>What comes next</h2>
        <p>
          The next steps include enriching the catalog with product cards and
          connecting real data sources.
        </p>
      </section>
    </div>
  );
}
