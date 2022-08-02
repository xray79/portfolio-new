import styles from "../styles/Projects.module.css";
import Card from "./Card";
import projectList from "./projectList";

const Projects = () => {
  return (
    <section className={styles.projects} id="projects">
      <div className={styles.container}>
        <div>
          <h2 className={styles.mainHeading}>Projects</h2>
          <p>
            Here is a list of all projects I have completed, with live demos and
            source code
          </p>
        </div>

        <div>
          <h3>Course Projects</h3>
          <p>Projects done as part of a course</p>
          <div className={styles.gridContainer}>
            {projectList.map((project, i) => (
              <Card key={i} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
