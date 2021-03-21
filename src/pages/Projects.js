import React from "react";
import { Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

//Components
import ProjectCard from "../components/ui/ProjectCard";

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    backgroundColor: theme.palette.common.white,
    [theme.breakpoints.down("md")]: {
      padding: "1em 0.5em",
    },
    padding: "7em 2em",
  },
  projectBannerOverlay: {
    background: "linear-gradient(to top, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0))",
    width: "100%",
  },
  projectBanner: {
    width: "100%",
    background: `linear-gradient(45deg, ${theme.palette.common.blue} 85%, ${theme.palette.common.razz} 0%)`,
    height: "36em",
  },
  projectImage: {
    width: "35em",
    maxWidth: "95%",
  },
  projectTitleContainer: {
    [theme.breakpoints.down("sm")]: {
      marginBottom: "0.5em",
    },
    paddingBottom: "0.3em",
    borderBottom: `4px solid ${theme.palette.common.razz}`
  },
}));

export default function Projects() {
  const classes = useStyles();

  const projectCards = [
    {
      img: "/images/mwatch.png",
      title: "MWatch",
      subheader: "Site de review de filmes",
      text:
        "Encontre o próximo filme que você irá assistir, faça um comentário sobre algum filme que você já assitiu e mantenha uma lista de filmes que você pretende assistir.",
      chips: [
        { text: "React", color: "primary" },
        { text: "REST API", color: "primary" },
        { text: "NodeJS", color: "primary" },
        { text: "PostgresSQL", color: "primary" },
        { text: "TMDb API", color: "primary" },
        { text: "Cadastro", color: "default" },
        { text: "Autenticação", color: "default" },
        { text: "Login", color: "default" },
        { text: "Logout", color: "default" },
      ],
      liveLink: "https://mwatch-site.herokuapp.com/",
      githubLink: "https://github.com/xorj/mwatch",
    },
    {
      img: "/images/weatherapp.png",
      title: "Weather App",
      subheader: "Site de previsão do tempo",
      text:
        "Busque uma cidade e encontre informações climáticas tais como: temperatura máxima e mínima e clima.",
      chips: [
        { text: "React", color: "primary" },
        { text: "NodeJS", color: "primary" },
        { text: "Axios", color: "primary" },
        { text: "Material-UI", color: "primary" },
        { text: "AccuWeather API", color: "primary" },
      ],
      liveLink: "https://xorj.github.io/todo-app/",
      githubLink: "https://github.com/xorj/weather-app",
    },
    {
      img: "/images/todoapp.png",
      title: "To do App",
      subheader: "Lista de tarefas",
      text:
        "Matenha uma lista de tarefas e saiba quais você ainda tem que fazer.",
      chips: [
        { text: "React", color: "primary" },
        { text: "HTML", color: "default" },
        { text: "CSS", color: "default" },
        { text: "Javascript", color: "default" },
      ],
      liveLink: "https://xorj.github.io/weather-app/",
      githubLink: "https://github.com/xorj/todo-app",
    },
  ];

  return (
    <Grid container direction="column" alignItems="center">
      <Grid item container justify="center" className={classes.projectBanner}>
        <Grid
          item
          container
          justify="center"
          className={classes.projectBannerOverlay}
        >
          <Grid
            item
            container
            md
            justify="center"
            alignItems="center"
            className={classes.projectTitle}
          >
            <Grid item className={classes.projectTitleContainer}>
              <Typography align="center" variant="h2">
                Meus Projetos
              </Typography>
            </Grid>
          </Grid>
          <Grid item container md justify="center">
            <img
              className={classes.projectImage}
              src={"/images/projectbanner.svg"}
              alt="presenting completed project"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item container justify="center" className={classes.cardContainer}>
        {projectCards.map((card, index) => (
          <ProjectCard
            key={index}
            props={card}
            index={index}
            className={index > 0 ? classes.cardMargin : undefined}
          />
        ))}
      </Grid>
    </Grid>
  );
}
