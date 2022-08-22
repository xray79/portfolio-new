import styles from "../styles/Contact.module.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    toast("Submitted");
  };

  return (
    <section className={styles.contact} id="contact">
      <div className={styles.container}>
        <h2 className={styles.heading}>Contact me</h2>
        <form className={styles.form} onSubmit={onSubmit}>
          <div className={styles.row}>
            <div className={styles.formGroup}>
              <input
                className={styles.input}
                type="text"
                name="firstName"
                id="firstName"
                placeholder="First name"
              />
            </div>
            <div className={styles.formGroup}>
              <input
                className={styles.input}
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Last name"
              />
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.formGroup}>
              <input
                className={`${styles.input} ${styles.inputEmail}`}
                type="email"
                name="email"
                id="email"
                placeholder="E-mail"
              />
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.formGroup}>
              <textarea
                className={`${styles.input} ${styles.inputTextArea}`}
                name="message"
                id="message"
                placeholder="Enter your message here"
              />
            </div>
          </div>
          <button className={styles.btn} type="submit">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
