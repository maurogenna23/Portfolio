import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import styles from './contact.module.css';

function ContactForm() {
    const [state, handleSubmit] = useForm("mvojgaqr");
    if (state.succeeded) {
        return (
            <div className={styles.containerMensaje}>
                <p className={styles.mensajeSuccess}>Thanks for the message!</p>
                <p className={styles.mensajeSuccess}>Follow Me!</p>
                <div className={styles.containerRedes}>
                    <a href="https://www.linkedin.com/in/mauro-genna-777a84237/">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/maurogenna23">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="https://www.instagram.com/mauro_genna/">
                        <i className='fab fa-instagram'></i>
                    </a>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.containerForm}>
            <div className={styles.login_box}>
                <p>Contact Me!</p>
                <form onSubmit={handleSubmit}>
                    <div className={styles.user_box}>
                        <label htmlFor="validationEmail">Email:</label>
                        <input
                            type="email"
                            name="email"
                            className={`form-control ${state.errors.email ? 'is-invalid' : ''}`}
                            id="validationEmail"
                            required
                        />
                        <div className="invalid-feedback">
                            Please provide a valid email.
                        </div>
                    </div>
                    <div className={styles.user_box}>
                        <label>Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            autoComplete="off"
                            className={`form-control ${state.errors.name ? 'is-invalid' : ''}`}
                            required
                        />
                        <ValidationError
                            prefix="Name"
                            field="name"
                            errors={state.errors}
                        />
                    </div>
                    <div className={styles.user_box}>
                        <label>Message:</label>
                        <textarea
                            id="message"
                            name="message"
                            autoComplete='off'
                            style={{ resize: 'none' }}
                            className={`form-control ${state.errors.message ? 'is-invalid' : ''}`}
                        />
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                        />
                    </div>
                    <div>
                        <button
                            className={`btn btn-primary ${styles.button}`}
                            type="submit"
                            disabled={state.submitting}
                        >
                            Submit
                        </button>
                        <a
                            href="https://api.whatsapp.com/send?phone=2616976887"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.whatsappIcon}
                        >
                            <i className="fab fa-whatsapp"></i>
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ContactForm;
