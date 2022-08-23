import styles from "../styles/Navbar.module.scss";
import { useRef, useState } from "react";
import Script from "next/script";

const NavBar = () => {
  const navRef = useRef();

  const toggleMenu = () => {
    // hide and show menu when links are clicked
    navRef.current.classList.toggle(styles.hidden);
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
      <nav ref={navRef} className={`${styles.navBar} ${styles.hidden}`}>
        <ul>
          <li className={`${styles.links} ${styles.home}`}>
            <a href="#" onClick={toggleMenu}>
              HOME
            </a>
          </li>
          <li className={`${styles.links}`}>
            <a href="#about" onClick={toggleMenu}>
              ABOUT
            </a>
          </li>
          <li className={`${styles.links}`}>
            <a href="#projects" onClick={toggleMenu}>
              PROJECTS
            </a>
          </li>
          <li className={`${styles.links}`}>
            <a href="#contact" onClick={toggleMenu}>
              CONTACT
            </a>
          </li>
        </ul>
      </nav>
      <button className={styles.btnMenu} onClick={toggleMenu}>
        <ion-icon name="menu-outline" size="large"></ion-icon>
      </button>
    </>
  );
};

export default NavBar;
