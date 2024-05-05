import React from "react";
import Image from "next/image";
import styles from '../../styles/projects.module.css';

function Projects(){
    return(
        <main>
            <h1 className='main-title'>Mis proyectos.</h1>
            <p>Un listado de mis proyectos más destacados.</p>
            <div className={styles.projectCard}>
                <div className={styles.icon}>
                    <Image src='/transminho.png' alt="Imagen de TransMinho" width={200} height={200}/>
                    <p>Vista previa de la web</p>
                </div>
                <div className={styles.text}>
                    <a href="https://github.com/a20paulaar/proyecto_final" className={styles.title}>Proyecto de fin de ciclo DAW.</a>
                    <p>Se trata de una web basada en una empresa de transportes ficticia (TransMinho) que permite la compra, reserva y consulta de viajes.</p>
                    <p>Tecnologías utilizadas principalmente: PHP, JavaScript, CSS.</p>
                </div>
            </div>
            <div className={styles.projectCard}>
                <div className={styles.icon}>
                    <Image src='/mitienda.png' alt="Imagen de MiTienda" width={200} height={200}/>
                    <p>Vista previa de la web</p>
                </div>
                <div className={styles.text}>
                    <a href="https://github.com/a20paulaar/ReactProject" className={styles.title}>Proyecto de eCommerce con React.</a>
                    <p>Se trata de una web para un eCommerce ficticio (MiTienda) que permite realizar diversas acciones como comprar, hacer login y además tiene acciones reservadas para los administradores.</p>
                    <p>Tecnologías utilizadas principalmente: React, CSS.</p>
                </div>
            </div>
        </main>
    )
};

export default Projects;