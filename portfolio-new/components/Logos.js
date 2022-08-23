import Image from "next/image";
import styles from "../styles/Logos.module.scss";

const Logos = (props) => {
  return (
    <div className={styles.logos}>
      <button>
        <img layout="fill" src={props.imgUrl} />
      </button>
    </div>
  );
};

export default Logos;
