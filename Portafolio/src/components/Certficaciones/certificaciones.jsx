import React from 'react';
import { Carousel } from 'react-bootstrap';
import styles from './certificaciones.module.css';


import imagen1 from '../../assets/imagen1.png';
import imagen2 from '../../assets/imagen2.png';
import imagen3 from '../../assets/imagen3.png';
import imagen4 from '../../assets/imagen4.png';
import imagen5 from '../../assets/imagen5.png';
import imagen6 from '../../assets/imagen6.png';

const Certificaciones = () => {
    return (
        <div className={styles.container}>
            <div className={styles.containerTitle}>
                <h2>CERTIFICATIONS</h2>
            </div>
            <div className={styles.containerCarousel}>
                <Carousel controls={false} indicators={false} className={styles.carouselItem}>
                    <Carousel.Item className={styles.carouselItem}>
                        <img className="d-block" src={imagen1} alt="Certificación 1" />
                    </Carousel.Item>
                    <Carousel.Item className={styles.carouselItem}>
                        <img className="d-block" src={imagen2} alt="Certificación 2" />
                    </Carousel.Item>
                    <Carousel.Item className={styles.carouselItem}>
                        <img className="d-block" src={imagen3} alt="Certificación 3" />
                    </Carousel.Item>
                    <Carousel.Item className={styles.carouselItem}>
                        <img className="d-block" src={imagen4} alt="Certificación 4" />
                    </Carousel.Item>
                    <Carousel.Item className={styles.carouselItem}>
                        <img className="d-block" src={imagen5} alt="Certificación 5" />
                    </Carousel.Item>
                    <Carousel.Item className={styles.carouselItem}>
                        <img className="d-block" src={imagen6} alt="Certificación 6" />
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className={styles.containerLinks}>
                <h3>Links:</h3>
                <a href="https://www.credential.net/profile/maurogenna401710/wallet">NextU</a>
                <a href="https://certificates.soyhenry.com/new-cert?id=b6e3c6bf0f3e079d7e7a3f7e341de05d7e4ba1e768a386ce3a7bbd8b28def4a7">
                    Full Stack Developer soyHenry
                </a>
                <a href="https://certificates.soyhenry.com/new-cert?id=2d7d15494aa73c61d38dac52113fef78b6f90f030e80dcdc774c145710c28e87">
                    Teaching-Assistant soyHenry
                </a>
            </div>
        </div>
    );
};

export default Certificaciones;
