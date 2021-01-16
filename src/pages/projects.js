import React from "react";
import { Grid, Cell } from "react-mdl";
import {makeStyles} from "@material-ui/core"

import ProjectsCard from '../components/projectsCard'

//import '../compCSS/aboutme.css';
const useStyles = makeStyles({
  list: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
    flexDirection: "column",
  },
});

const Projects = () => {
  const styles = useStyles();
  return (
    <div style={{ width: "100%", margin: "auto" }}>
      <Grid className="resume-body">
        <Cell col={12}>
          <h1>Projects</h1>
          <hr></hr>
          <Cell col={12} className={styles.list}>
            <ProjectsCard link="https://github.com/rymcguin/RedditClone" image="./reddit.svg" title="Reddit Clone" body="Reddit is one of my favorite social media sites, and I decided to recreate it using TypeScript and React. I followed along with a tutorial on Youtube, and it taught me tons of proper coding practices and gave me more experience developing web applications. Doing this project helped me become more comfortable developing a server and working with databases."/>

            <ProjectsCard link="https://www.booksthatmakeyousmarter.com/" title="Books That Make You Smarter" image="./btmys.png" body="An Amazon affiliated website that provides weekly book
            recommendations to make you a better person. Developed with React, GatsbyJS, and GraphQL. We scour a variety of sources to generate the best possible book recommendation every week."/>

            <ProjectsCard link="https://github.com/rymcguin/facebrain" image="./faceapi.jpg" title="Face Detection" body="A face recognition website developed using React, Node,PostgresSQL, Clarifai API, and CORS. This application allows you to enter any link off of the web and will detect if there is a face in the photo. It is connected to a database which allows you to keep a profile and tack the amount of photos searched" />

          </Cell>
        </Cell>
      </Grid>
    </div>
  );
};

export default Projects;
