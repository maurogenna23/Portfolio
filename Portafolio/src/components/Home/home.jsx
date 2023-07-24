import React, { useState, useEffect } from 'react';
import styles from './home.module.css';
import imagen from '../../assets/Coder.png';
import About from '../About/about';
import Certificaciones from '../Certficaciones/certificaciones';
import Proyectos from '../Proyects/proyect';
import ContactForm from '../Contact/contact';
import Languages from '../Programming Language/languages';

const Home = () => {
    const [showBackToTop, setShowBackToTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Mostrar el botón "Back to Top" cuando se desplaza más de 400 píxeles hacia abajo
            if (window.scrollY > 1000) {
                setShowBackToTop(true);
            } else {
                setShowBackToTop(false);
            }
        };

        // Agregar el event listener para el scroll
        window.addEventListener('scroll', handleScroll);

        // Remover el event listener cuando el componente se desmonta
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleBackToTop = () => {
        // Desplazar la página al inicio
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className={styles.containerHome}>
            <section id='home' className={styles.container}>
                <div className={styles.texto}>
                    <h2>¡Welcome to my portfolio!</h2>
                    <p>
                        I am a passionate Full Stack Developer with a love for the world of Front End. Here you will find carefully designed and developed projects to deliver impactful web experiences. Each line of code represents my dedication to creating intuitive and aesthetically appealing interfaces.

                        Explore my selection of projects and discover how technology and art come together to bring my ideas to life. I am always seeking new challenges and opportunities to collaborate on exciting projects.
                    </p>
                    <p>
                        ¡Thank you for visiting my portfolio!
                    </p>
                </div>
                <img src={imagen} alt={imagen} />
            </section>
            <hr className={styles.separator} />
            <section id='about'>
                <About />
            </section>
            <hr className={styles.separator} />
            <section id='Certificaciones'>
                <Certificaciones />
            </section>
            <hr className={styles.separator} />
            <section id='Proyectos'>
                <Proyectos />
            </section>
            <hr className={styles.separator} />
            <section id='Languages'>
                <Languages />
            </section>
            <hr className={styles.separator} />
            <section id='Contact'>
                <ContactForm />
            </section>

            {showBackToTop && (
                <button className={styles.backToTopButton} onClick={handleBackToTop}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10" /><path d="M16 12l-4-4-4 4M12 16V9" /></svg>
                </button>
            )}
        </div>
    );
};

export default Home;
