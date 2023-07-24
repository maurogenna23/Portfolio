import styles from './about.module.css';
import imagen from '../../assets/fotoLinkedin.jpg'

const About = () => {
    return (
        <div className={styles.containerAbout}>
            <div className={styles.title}>
                <h2>ABOUT ME</h2>
            </div>
            <div className={styles.subContainer}>
                <div className={styles.textContainer}>
                    <p>
                        As a Full Stack Developer, I have experience and skills in web development, both Front-end and Back-end, as well as data architecture. I am proficient in teamwork, data analysis, and goal achievement. I am familiar with agile methodologies like Scrum and use version control tools like Git. I have knowledge of data structures, algorithms, and CSS frameworks. I have worked on projects using technologies such as React.js, Node.js, Redux, and SQL. I have obtained certifications in Javascript, CSS, HTML, and Bootstrap.

                        In addition to my technical skills, I possess communication skills, the ability to work in a team, proactivity, and adaptability to change. I am committed to continuous learning and improving my skills.
                    </p>
                    <p className={styles.ingles}>English level: B2</p>
                    <p className={styles.italiano}>Italian level: B1</p>
                </div>
                <div className={styles.imagen}>
                    <img src={imagen} alt='imagen' />
                </div>
            </div>
            <a href="https://docs.google.com/document/d/10h8wy61Rg6mIZqZL7FHccDj9FzbikV--oaiLyhikoRs/edit?usp=drive_link">
                <button className={styles.btn}> Ver CV
                </button>
            </a>
        </div>
    )
}

export default About