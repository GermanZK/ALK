import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.hero}>
      <section>
        <h1>ALK — стартовый каркас каталога</h1>
        <p>
          Проект подготовлен на Next.js с TypeScript и Prisma. Здесь будет
          располагаться витрина каталога и дальнейшая логика работы с данными.
        </p>
        <div className={styles.heroActions}>
          <Link className={styles.primary} href="/catalog">
            Открыть каталог
          </Link>
          <Link className={styles.secondary} href="#about">
            Узнать больше
          </Link>
        </div>
      </section>
      <section id="about">
        <h2>Что дальше</h2>
        <p>
          Следующие шаги — добавить модели Prisma, подключить базу данных и
          наполнить каталог карточками товаров.
        </p>
      </section>
    </div>
  );
}