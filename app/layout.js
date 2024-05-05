import { Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import styles from './styles/styles.module.css';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:"My Portfolio",
  description: "Paula Álvarez portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel='stylesheet'/>
      </head>
      <body className={inter.className}>
        <div className={styles.header}>
          <div className={styles.logo}>
            <Image src='/logo.png' alt='Mi logo' width={100} height={75} />
          </div>
          <div className={styles.links}>
            <Link href='/'>Inicio</Link>
            <Link href='/applications/about'>Sobre mí</Link>
            <Link href='/applications/projects'>Mis proyectos</Link>
          </div>    
        </div>
        <div className={styles.content}>{children}</div>
        <div className={styles.footer}>
          <div className={styles.mainFooter}>
            <ul>
              <li>Contacto</li>
              <li>Email: paulaalvarezrocha@gmail.com</li>
              <li>Teléfono: (+34) 666057475</li>
            </ul>
            <ul>
              <li>Redes Sociales</li>
              <li><a href="https://www.linkedin.com/in/paula-álvarez-rocha-887036242/">LinkedIn</a></li>
            </ul>
            <ul>
              <li>Dirección</li>
              <li>Madrid, España.</li>
            </ul>
          </div>
          <p>© 2024 Paula Álvarez Rocha. Todos los derechos reservados</p>
        </div>
      </body>
    </html>
  );
}
