import styles from "../styles/Projects.module.css";
import Card from "./Card";

const Projects = () => {
  // Projects component

  const project1 = {
    name: "Bank app",
    desc: "A banking app made with pure JavaScript. This was done to learn array methods, DOM manipulation and the Internationalisation API. More info is available the GitHub Readme.",
    live: "https://xray79.github.io/bank-app/",
    code: "https://github.com/xray79/bank-app",
  };

  const project2 = {
    name: "To-do list",
    desc: "A To-do list app using Express and MongoDB back-end using GET and POST requests and EJS templates. \nNew lists can be created by appending any string to the end of the URL.",
    live: "https://polar-inlet-49071.herokuapp.com",
    code: "https://github.com/xray79/todolist",
  };

  const project3 = {
    name: "Blog site",
    desc: "A blog site using Next.js front-end and strapi cms for back-end. Usage of a CMS allows live updating of the app without rebuilding or redeploying. New articles can be added through Strapi.",
    live: "https://blog-site-49umv2gmr-xray79.vercel.app",
    code: "https://github.com/xray79/blog-site",
  };

  const project4 = {
    name: "React notes",
    desc: "A React app to take notes, similar to Google Keep. Project was done to learn about functional components, props and useState hook.",
    live: "https://xray79.github.io/react-notes/",
    code: "https://github.com/xray79/react-notes",
  };

  const project5 = {
    name: "Number game",
    desc: "description placeholder",
    live: "link to live code",
    code: "link to github repo",
  };

  const project6 = {
    name: "Dice game",
    desc: "description placeholder",
    live: "link to live code",
    code: "link to github repo",
  };

  const courseProjects = [
    project1,
    project2,
    project3,
    project4,
    project5,
    project6,
  ];

  return (
    <section className={styles.projects}>
      <div className={styles.container}>
        <div>
          <h2 className={styles.mainHeading}>Projects</h2>
          <p>
            Here is a list of all projects I have completed, with live demos and
            source code
          </p>
        </div>

        {/* <div>
          <h3>Featured Projects</h3>
          <p></p>
          <div className={styles.gridContainer}></div>
        </div> */}

        <div>
          <h3>Course Projects</h3>
          <p>Projects done as part of a course</p>
          <div className={styles.gridContainer}>
            <Card project={project1} />
            <Card project={project2} />
            <Card project={project3} />
            <Card project={project4} />
            {/* <Card project={project5} />
            <Card project={project6} /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
