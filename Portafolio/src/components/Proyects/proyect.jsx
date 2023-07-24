import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import styles from './proyect.module.css';
import codeCommunityImg from '../../assets/CodeCommunity.png'
import piDogImg from '../../assets/Pi_Dogs.png'

const listaProyectos = [
    {
        id: 1,
        titulo: 'Code Community',
        descripcion:
            'It is a social network for programmers that uses technologies like React-Redux, Python, Django, PostgreSQL, and Javascript. The social network consists of several sections, such as a home where users can create posts, which can be projects, communities to interact with different users, a "students" section where educational resources can be found, a user profile view, and instructors who can provide assistance with potential programming issues users may encounter.',
        link: 'https://code-community-three.vercel.app/',
        img: codeCommunityImg
    },
    {
        id: 2,
        titulo: 'Dog World',
        descripcion:
            'It is a Dog API that uses technologies like React-Redux, Express, Node, and PostgreSQL. This API displays all dog breeds, allows searching by name, and provides details about each one. It also includes functionalities such as creating a dog and combined filters.',
        link: 'https://github.com/maurogenna23/PI-DOGS',
        img: piDogImg
    },
];

const Proyectos = () => {
    const proyectosPorPagina = 1; // Cantidad de proyectos por página
    const [paginaActual, setPaginaActual] = useState(0); // Comienza en 0 para el índice

    const handlePaginaCambio = (data) => {
        const paginaSeleccionada = data.selected;
        setPaginaActual(paginaSeleccionada);
    };

    const proyectosAMostrar = listaProyectos.slice(
        paginaActual * proyectosPorPagina,
        (paginaActual + 1) * proyectosPorPagina
    );

    const [isImageEnlarged, setIsImageEnlarged] = useState(false);
    const [enlargedImage, setEnlargedImage] = useState(null);

    const handleImageClick = (imgSrc) => {
        setIsImageEnlarged(true);
        setEnlargedImage(imgSrc);
    };

    const handleCloseEnlargedImage = () => {
        setIsImageEnlarged(false);
        setEnlargedImage(null);
    };

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h2>PROJECTS</h2>
            </div>
            {proyectosAMostrar.map((proyecto) => (
                <div key={proyecto.id} className={styles.containerProyecto}>
                    <h3>{proyecto.titulo}</h3>
                    <img
                        src={proyecto.img}
                        alt={proyecto.img}
                        className={styles.proyectoImagen}
                        onClick={() => handleImageClick(proyecto.img)}
                    />
                    <p>{proyecto.descripcion}</p>
                    <a href={proyecto.link}>View project</a>
                </div>
            ))}
            <ReactPaginate
                previousLabel={'Previous'}
                nextLabel={'Next'}
                breakLabel={'...'}
                pageCount={Math.ceil(listaProyectos.length / proyectosPorPagina)}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePaginaCambio}
                containerClassName={styles.pagination}
                activeClassName={styles.active}
                pageLinkClassName={styles.pageLink}
            />
            {isImageEnlarged && (
                <div className={styles.enlargedImageOverlay} onClick={handleCloseEnlargedImage}>
                    <img src={enlargedImage} alt="Enlarged" className={styles.enlargedImage} />
                </div>
            )}
        </div>
    );
};

export default Proyectos;
