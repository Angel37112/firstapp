import Image from "next/image";
import styles from "@/styles/index.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <nav className={styles.navbar}>
          <a href="#">Home</a>
          <a href="#">Acerca de...</a>
        </nav>
      </div>
      <div className={styles.content}>
        <h2>Hola, mi nombre es Ángel García Mendoza del grupo TI03SM-22</h2>
      </div>
    </main>
  );
}