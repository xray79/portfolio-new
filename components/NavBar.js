import styles from "../styles/Navbar.module.scss";
import { useRef } from "react";
import Script from "next/script";

const NavBar = () => {
  const navRef = useRef();
  const ulRef = useRef();
  const homeRef = useRef();
  const projectsRef = useRef();
  const aboutRef = useRef();
  const contactRef = useRef();

  const toggleMenu = (event) => {
    navRef.current.classList.toggle(styles.navBarRes);
    ulRef.current.classList.toggle(styles.ulRes);
    homeRef.current.classList.toggle(styles.homeRes);

    homeRef.current.classList.toggle(styles.hidden);
    projectsRef.current.classList.toggle(styles.hidden);
    aboutRef.current.classList.toggle(styles.hidden);
    contactRef.current.classList.toggle(styles.hidden);
  };

  return (
    <>
      <Script
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
      />
      <Script
        nomodule
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
      />
      <nav ref={navRef} className={styles.navBar}>
        <ul ref={ulRef} className={styles.navList}>
          <li
            ref={homeRef}
            className={`${styles.links} ${styles.home} ${styles.hidden}`}
          >
            <a href="#">HOME</a>
          </li>
          <li ref={aboutRef} className={`${styles.links}  ${styles.hidden}`}>
            <a href="#about">ABOUT</a>
          </li>
          <li ref={projectsRef} className={`${styles.links}  ${styles.hidden}`}>
            <a href="#projects">PROJECTS</a>
          </li>
          <li ref={contactRef} className={`${styles.links}  ${styles.hidden}`}>
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
        <button className={styles.btnMenu} onClick={toggleMenu}>
          <ion-icon name="menu-outline" size="large"></ion-icon>
        </button>
      </nav>
    </>
  );
};

export default NavBar;
