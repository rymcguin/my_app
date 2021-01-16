import React from 'react'
import {Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Link, makeStyles, Typography} from "@material-ui/core";

const useStyles = makeStyles({
    card: {
      width: "50%",
      minWidth: 300,
      marginTop: 20,
      marginBottom: 20,
    },
    media: {
      height: 200,
      alignContent: "center",
    },
});

export default function ProjectsCard ({link, image, title, body}){
    const styles = useStyles()
    return(
    <Card className={styles.card}>
              <CardActionArea>
                <Link href={link}>
                  <CardMedia
                    className={styles.media}
                    image={image}
                    title={title}
                  />
                </Link>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                      {body}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  <Link href={link}>
                    See More
                  </Link>
                </Button>
              </CardActions>
    </Card>
    )
}