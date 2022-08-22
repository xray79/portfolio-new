import stylesAbout from "../styles/About.module.scss";
import Logos from "./Logos";

const About = () => {
  return (
    <section id="about" className={stylesAbout.aboutSection}>
      <div className={stylesAbout.container}>
        <div>
          <h2 className={stylesAbout.heading}>About me</h2>
          <p>After studying many online courses</p>
        </div>

        <div>
          <h2>My skills</h2>
          <p>
            Here is a list of skills I am familiar with. My main competencies
            tend to fall within the MERN stack, however I am happy to work with
            any of these technologies or learn something new.
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
