import Image from "next/image";
import styles from "../styles/Logos.module.css";

const Logos = (props) => {
  console.log(props.imgUrl);

  return (
    <div className={styles.logos}>
      <button>
        <img layout="fill" src={props.imgUrl} />
      </button>
    </div>
  );
};

export default Logos;
