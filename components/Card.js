import React from "react";
import styles from "../styles/Cards.module.scss";

function Card(props) {
  return (
    <>
      <div className={styles.cards}>
        <h4>{props.project.name}</h4>
        <p>{props.project.desc}</p>
        <div className={styles.buttonsContainer}>
          <a
            className={styles.link}
            href={props.project.live}
            target="_blank"
            rel="noreferrer"
          >
            Live demo
          </a>
          <a
            className={styles.link}
            href={props.project.code}
            target="_blank"
            rel="noreferrer"
          >
            Github repo
          </a>
        </div>
      </div>
    </>
  );
}

export default Card;
