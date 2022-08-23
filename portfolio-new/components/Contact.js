import styles from "../styles/Contact.module.scss";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import Axios from "axios";

const Contact = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const { firstName, lastName, email, message } = data;

  const changeHandler = (e) => {
    setData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    // prevent page refresh
    e.preventDefault();

    // post request to api
    Axios.post("http://localhost:4000/api", { data })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });

    // show toast and reset data
    toast.success("Sent!");
    setData({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    });
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
                value={firstName}
                placeholder="First name"
                onChange={changeHandler}
              />
            </div>
            <div className={styles.formGroup}>
              <input
                className={styles.input}
                type="text"
                name="lastName"
                id="lastName"
                value={lastName}
                placeholder="Last name"
                onChange={changeHandler}
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
                value={email}
                placeholder="E-mail"
                onChange={changeHandler}
              />
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.formGroup}>
              <textarea
                className={`${styles.input} ${styles.inputTextArea}`}
                name="message"
                id="message"
                value={message}
                placeholder="Enter your message here"
                onChange={changeHandler}
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
