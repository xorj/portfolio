import React from "react";
import {
  Typography,
  Grid,
  Card,
  CardHeader,
  CardMedia,
  CardActions,
  CardContent,
  Chip,
  IconButton,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

//Icons
import LanguageIcon from "@material-ui/icons/Language";
import GithubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles((theme) => ({
  card: {
    borderRadius: 0,
    boxShadow: theme.shadows[3],
    ...theme.typography.h4,
    padding: 0,
    [theme.breakpoints.down("sm")]: {
      margin: "0.5em 0",
    },
    [theme.breakpoints.up("md")]: {
      transition: "all .3s ease-in-out",
      "&:hover": {
        transform: "scale(1.02)",
        boxShadow: theme.shadows[5],
      },
    },
    width: "100%",
    maxWidth: "16em",
  },
  cardMargin: {
    [theme.breakpoints.up("md")]: {
      margin: "0 0 0 2em",
    },
  },
  imageItem: {
    maxWidth: "30em",
  },
  media: {
    paddingTop: "50%",
  },
  textContainer: {
    height: "5em",
    [theme.breakpoints.up("lg")]: {
      height: "3.5em",
    },
    [theme.breakpoints.down("sm")]: {
      height: "auto",
    },
  },
  chipContainer: {
    height: "6em",
    [theme.breakpoints.down("sm")]: {
      height: "auto",
    },
  },
  chipItem: {
    padding: "0.2em 0.25em 0 0",
  },
}));

export default function ProjectCard(props) {
  const classes = useStyles();

  //Destructuring props
  const {
    img,
    title,
    subheader,
    text,
    chips,
    liveLink,
    githubLink,
  } = props.props;
  return (
    <Card
      className={`${classes.card} ${props.index > 0 ? classes.cardMargin : ""}`}
      component={Grid}
      item
      md
    >
      <CardMedia className={classes.media} image={img} />
      <CardHeader title={title} subheader={subheader} />
      <CardContent>
        <Grid item className={classes.textContainer}>
          <Typography variant="body1">{text}</Typography>
        </Grid>
        <Grid
          item
          container
          justify="center"
          className={classes.chipContainer}
          style={{ paddingTop: "1em" }}
        >
          {chips.map((chip, index) => (
            <Grid key={`${title}+${index}`} item className={classes.chipItem}>
              <Chip label={chip.text} color={chip.color} />
            </Grid>
          ))}
        </Grid>
      </CardContent>
      <CardActions>
        <IconButton
          className={classes.iconButtom}
          href={liveLink}
          component="a"
          target="foobar"
          rel="noopener"
        >
          <LanguageIcon fontSize="large" color="primary" />
        </IconButton>
        <IconButton
          className={classes.iconButtom}
          component="a"
          href={githubLink}
          target="foobar"
          rel="noopener"
        >
          <GithubIcon fontSize="large" color="primary" />
        </IconButton>
      </CardActions>
    </Card>
  );
}
