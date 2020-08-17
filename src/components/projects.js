import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import { Grid, Cell } from "react-mdl";

//import '../compCSS/aboutme.css';
const useStyles = makeStyles({
  card: {
    width: "50%",
    minWidth: 300,
    marginTop: 20,
    marginBottom: 20,
  },
  list: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
    flexDirection: "column",
  },
  media: {
    height: 200,
    alignContent: "center",
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
            <Card className={styles.card}>
              <CardActionArea>
                <Link href="https://www.booksthatmakeyousmarter.com/">
                  <CardMedia
                    className={styles.media}
                    image="./btmys.png"
                    title="Books That Make You Smarter"
                  />
                </Link>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Books That Make You Smarter
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    An Amazon affiliated website that provides weekly book
                    recommendations to make you a better person. Developed with
                    React, GatsbyJS, and GraphQL. We scour a variety of sources
                    to generate the best possible book recommendation every
                    week.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  <Link href="https://www.booksthatmakeyousmarter.com/">
                    Learn More
                  </Link>
                </Button>
              </CardActions>
            </Card>
            <Card className={styles.card}>
              <CardActionArea>
                <Link href="https://github.com/rymcguin/facebrain">
                  <CardMedia
                    className={styles.media}
                    image="./faceapi.jpg"
                    title="Face Detection github"
                  />
                </Link>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Face Detection App
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    A face recognition website developed with React, Node,
                    PostgresSQL, Clarifai API, and CORS. This application allows
                    you to enter any link off of the web and will detect if
                    there is a face in the photo. It is connected to a database
                    which allows you to keep a profile and tack the amount of
                    photos searched
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Link href="https://github.com/rymcguin/facebrain">
                  <Button size="small" color="primary">
                    Learn More
                  </Button>
                </Link>
              </CardActions>
            </Card>
            <Card className={styles.card}></Card>
          </Cell>
        </Cell>
      </Grid>
    </div>
  );
};

export default Projects;
