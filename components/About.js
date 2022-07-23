import { NextComponentType } from "next";
import stylesAbout from "../styles/About.module.css";
import Logos from "./Logos";

const About = () => {
  return (
    <section id="about" className={stylesAbout.aboutSection}>
      <div className={stylesAbout.container}>
        <div>
          <h2 className={stylesAbout.heading}>About me</h2>
          <p>
            After graduating in 2020 with an Engineering degree I have been
            doing online courses related to web development
          </p>
        </div>

        <div>
          <h2>My skills</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos maxime iure amet consequatur voluptate quis est
            reprehenderit omnis aliquam, magni sint. Adipisci consequatur fuga
            dicta incidunt voluptates, labore minus iure!
          </p>

          <div className={stylesAbout.gridContainer}>
            <Logos imgUrl="./logos/html.png" />
            <Logos imgUrl="./logos/CSS3.png" />
            <Logos imgUrl="./logos/JS.png" />
            <Logos imgUrl="./logos/tailwind.png" />
            <Logos imgUrl="./logos/bootstrap.png" />
            <Logos imgUrl="./logos/react.png" />
            <Logos imgUrl="./logos/next.png" />
            <Logos imgUrl="./logos/github.svg" />
            <Logos imgUrl="./logos/node.png" />
            <Logos imgUrl="./logos/mongodb.png" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
