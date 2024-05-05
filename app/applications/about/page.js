
import React from "react";
import Image from "next/image";
import styles from '../../styles/about.module.css';

function About(){
    return(
        <main>
            <h1 className="main-title">Sobre mí.</h1>
            <div className={styles.profileCard}>
                <div className={styles.icon}>
                    <Image src='/pau.png' alt="Foto de Paula" width={200} height={200}/>
                </div>
                <div className={styles.text}>
                    <p>Mi nombre es Paula Álvarez y soy web developer especializada en desarrollo front-end y cuya pasión es el diseño web. Utilizo tecnologías modernas y estoy constantemente actualizando mis conocimientos.</p>
                    <div>
                        <p className={styles.title}>Estudios:</p>
                        <ul>
                            <li>Grado superior de desarrollo de Aplicaciones Web</li>
                            <li>Curso de Angular: de cero a experto.</li>
                            <li>Bootcamp de Desarrollo Front-End</li>
                        </ul>
                    </div>
                    <div>
                        <p className={styles.title}>Tecnologías:</p>
                        <ul>
                            <li>HTML, CSS, JavaScript</li>
                            <li>SASS, SCSS, LESS</li>
                            <li>PHP, Laravel, SQL</li>
                            <li>AngularJS, Angular, React</li>
                        </ul>
                    </div>
                    <div>
                        <p className={styles.title}>Experiencia:</p>
                        <ul>
                            <li className={styles.title}>Desarrollador Front-End Jr.</li>
                            <li>Scalefast:  08/2022 - 05/2023 </li>
                            <li>Desarrollo de páginas web responsive en una empresa dedicada al eCommerce y que trabaja con diversos clientes y marcas reconocibles.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    )
};

export default About;