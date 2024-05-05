import Image from "next/image";
import styles from './styles/home.module.css';
export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <Image src='/code.png' alt='Icono de ordenador' height={400} width={400}/>
      </div>
      <div className={styles.text}>
        <div className={styles.title}>Paula Álvarez</div>
        <p className={styles.subtitle}>Web developer</p>
      </div>
    </main>
  );
}
