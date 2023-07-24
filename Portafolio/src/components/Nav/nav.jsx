import styles from './nav.module.css';

const Nav = () => {

    const redirectToLinkedIn = () => {
        window.open('https://www.linkedin.com/in/mauro-genna-777a84237/', '_blank');
    };

    const redirectToGitHub = () => {
        window.open('https://github.com/maurogenna23', '_blank');
    };

    const redirectToWhatsApp = () => {
        window.open('https://api.whatsapp.com/send?phone=2616976887', '_blank');
    };


    return (
        <div className={styles.containerNav}>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container-fluid">
                    <h1>
                        MAURO GENNA
                    </h1>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="offcanvasDarkNavbar">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a href="#about" className={styles.section}>About</a>
                            </li>
                            <li className="nav-item">
                                <a href="#Certificaciones" className={styles.section}>Certifications</a>
                            </li>
                            <li className="nav-item">
                                <a href="#Proyectos" className={styles.section}>Projects</a>
                            </li>
                            <li className="nav-item">
                                <a href="#Languages" className={styles.section}>Technologies</a>
                            </li>
                            <li className="nav-item">
                                <a href="#Contact" className={styles.section}>Contact</a>
                            </li>
                        </ul>
                        <div className={styles.redes}>
                            <i className="fab fa-linkedin" onClick={redirectToLinkedIn}></i>
                            <i className="fab fa-github" onClick={redirectToGitHub}></i>
                            <i className="fab fa-whatsapp" onClick={redirectToWhatsApp}></i>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Nav;
