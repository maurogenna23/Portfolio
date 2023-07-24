import React from "react";
import imagen1 from "../../assets/html.jpg";
import imagen2 from "../../assets/css3.jpg";
import imagen3 from "../../assets/javascript.jpg";
import imagen4 from "../../assets/node.jpg";
import imagen5 from "../../assets/postgres.jpg";
import imagen6 from "../../assets/react.jpg";
import imagen7 from "../../assets/redux.jpg";
import imagen8 from "../../assets/bootstrap.jpg";
import imagen9 from "../../assets/git.jpg";
import styles from "./language.module.css";

const Languages = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h2>TECHNOLOGIES</h2>
            </div>
            <div className={styles.subContainer}>
                <div className={styles.imageContainer}>
                    <div className={styles.card_container}>
                        <div className={styles.card}>
                            <div className={styles.img_content}>
                                <img src={imagen1} alt="" />
                            </div>
                            <div className={styles.content}>
                                <p className={styles.heading}>HTML</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.card_container}>
                        <div className={styles.card}>
                            <div className={styles.img_content}>
                                <img src={imagen2} alt="" />
                            </div>
                            <div className={styles.content}>
                                <p className={styles.heading}>CSS3</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.card_container}>
                        <div className={styles.card}>
                            <div className={styles.img_content}>
                                <img src={imagen3} alt="" />
                            </div>
                            <div className={styles.content}>
                                <p className={styles.heading}>JAVASCRIPT</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.card_container}>
                        <div className={styles.card}>
                            <div className={styles.img_content}>
                                <img src={imagen4} alt="" />
                            </div>
                            <div className={styles.content}>
                                <p className={styles.heading}>NODE JS</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.card_container}>
                        <div className={styles.card}>
                            <div className={styles.img_content}>
                                <img src={imagen5} alt="" />
                            </div>
                            <div className={styles.content}>
                                <p className={styles.heading}>PostgreSQL</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.card_container}>
                        <div className={styles.card}>
                            <div className={styles.img_content}>
                                <img src={imagen6} alt="" />
                            </div>
                            <div className={styles.content}>
                                <p className={styles.heading}>REACT JS</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.card_container}>
                        <div className={styles.card}>
                            <div className={styles.img_content}>
                                <img src={imagen7} alt="" />
                            </div>
                            <div className={styles.content}>
                                <p className={styles.heading}>REDUX</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.card_container}>
                        <div className={styles.card}>
                            <div className={styles.img_content}>
                                <img src={imagen8} alt="" />
                            </div>
                            <div className={styles.content}>
                                <p className={styles.heading}>BOOTSTRAP</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.card_container}>
                        <div className={styles.card}>
                            <div className={styles.img_content}>
                                <img src={imagen9} alt="" />
                            </div>
                            <div className={styles.content}>
                                <p className={styles.heading}>GIT</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Languages;
