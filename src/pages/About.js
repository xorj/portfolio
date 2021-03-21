import React from 'react';
import {Grid, Typography, Card, Chip} from '@material-ui/core';
import {makeStyles, useTheme} from '@material-ui/core/styles';

/*Icons*/
import reactIcon from '../assets/react.svg';
import javascriptIcon from '../assets/javascript.svg';
import gitIcon from '../assets/git.svg';
import nodeIcon from '../assets/node.svg';

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    borderRadius: 0,
    boxShadow: theme.shadows[4],
    width: '50em',
    padding: '1em 0.8em',
    [theme.breakpoints.up('md')]: {
      padding: '2em 1em',
      marginTop: '-4em',
      marginBottom: '5em',
    },
    maxWidth: '90%',
  },
  cardTextContainer: {
    boxShadow: theme.shadows[1],
    borderRadius: '0.4em',
    marginTop: '1em',
    backgroundColor: theme.palette.common.white,
    padding: '1em 0.8em',
    width: '40em',
    [theme.breakpoints.down('md')]: {
      maxWidth: '30em',
      width: 'auto',
    },
  },
  left: {
    alignSelf: 'flex-start',
    width: '20em',
    maxWidth: '90%',
  },

  right: {
    alignSelf: 'flex-end',
    width: '40em',
    maxWidth: '90%',
  },

  bannerOverlay: {
    background: 'linear-gradient(to top, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0))',
    width: '100%',
  },
  banner: {
    width: '100%',
    background: `linear-gradient(45deg, ${theme.palette.common.blue} 85%, ${theme.palette.common.razz} 0%)`,
    height: '36em',
  },
  image: {
    width: '35em',
    maxWidth: '95%',
  },
  titleContainer: {
    [theme.breakpoints.down('sm')]: {
      marginBottom: '0.5em',
    },
    paddingBottom: '0.3em',
    borderBottom: `4px solid ${theme.palette.common.razz}`,
  },

  chipHobby: {
    ...theme.typography.body1,
    margin: '0.1em',
    textDecoration: 'none',
    color: theme.palette.common.razz,
    fontWeight: '700',
    backgroundColor: theme.palette.common.white,
    cursor: 'pointer',
  },
}));

export default function About() {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <Grid container direction="column">
      <Grid item container justify="center" className={classes.banner}>
        <Grid item container justify="center" className={classes.bannerOverlay}>
          <Grid
            item
            container
            md
            justify="center"
            alignItems="center"
          >
            <Grid item className={classes.titleContainer}>
              <Typography align="center" variant="h2">
                Sobre Mim
              </Typography>
            </Grid>
          </Grid>
          <Grid item container md justify="center">
            <img
              className={classes.image}
              src={'/images/aboutbanner.svg'}
              alt="presenting completed project"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item container justify="center" style={{backgroundColor: theme.palette.common.white}}>
        <Card className={classes.cardContainer}>
          <Grid container direction="column">
            <Grid
              item
              className={`${classes.cardTextContainer} ${classes.left}`}
              style={{marginTop: 0}}
            >
              <Typography variant="body1">Quem é você?</Typography>
            </Grid>
            <Grid
              item
              className={`${classes.cardTextContainer} ${classes.right}`}
            >
              <Typography variant="body1">
                Atualmente sou um estudante de Engenharia de Computação que está
                sempre interessado em resolver problemas e aprender novas
                coisas. Sou apaixonado por tecnologia, computação e ficção
                científica. Meus hobbies são:
              </Typography>
              <Grid item container style={{paddingTop: '0.2em'}}>
                <Chip
                  label={'leitura'}
                  component="a"
                  href="https://www.skoob.com.br/usuario/4012894-xorj#_=_"
                  className={classes.chipHobby}
                  target="foobar"
                  rel="nooponer"
                ></Chip>
                <Chip
                  component="a"
                  label={'touch typing'}
                  href="https://10fastfingers.com/user/2156345/"
                  className={classes.chipHobby}
                  target="foobar"
                  rel="nooponer"
                />
                <Chip
                  component="a"
                  label={'programação competitiva'}
                  href="https://codeforces.com/profile/jorge.santos"
                  className={classes.chipHobby}
                  target="foobar"
                  rel="nooponer"
                />
              </Grid>
            </Grid>
            <Grid
              item
              className={`${classes.cardTextContainer} ${classes.left}`}
            >
              <Typography variant="body1">O que você faz?</Typography>
            </Grid>
            <Grid
              item
              className={`${classes.cardTextContainer} ${classes.right}`}
            >
              <Typography variant="body1" gutterBottom>
                Eu sou um desenvolvedor full-stack, minhas principais
                tecnologias são:
              </Typography>
              <Grid container style={{padding: "0.5em"}}>
                <Grid item container direction="column" alignItems="center" xs>
                  <Typography
                    variant="body1"
                    style={{
                      fontWeight: '700',
                      color: theme.palette.common.razz,
                    }}
                  >
                    React
                  </Typography>
                  <img
                    src={reactIcon}
                    alt="react icons"
                    style={{height: '4.5em'}}
                  />
                </Grid>
                <Grid item container direction="column" alignItems="center" xs>
                  <Typography
                    variant="body1"
                    style={{
                      fontWeight: '700',
                      color: theme.palette.common.razz,
                    }}
                  >
                    Javascript
                  </Typography>
                  <img
                    src={javascriptIcon}
                    alt="javascript icons"
                    style={{height: '4.5em'}}
                  />
                </Grid>
                <Grid item container direction="column" alignItems="center" xs>
                  <Typography
                    variant="body1"
                    style={{
                      fontWeight: '700',
                      color: theme.palette.common.razz,
                    }}
                  >
                    Node.js
                  </Typography>
                  <img
                    src={nodeIcon}
                    alt="nodejs icons"
                    style={{height: '4.5em'}}
                  />
                </Grid>
                <Grid item container direction="column" alignItems="center" xs>
                  <Typography
                    variant="body1"
                    style={{
                      fontWeight: '700',
                      color: theme.palette.common.razz,
                    }}
                  >
                    Git
                  </Typography>
                  <img
                    src={gitIcon}
                    alt="git icons"
                    style={{height: '4.5em'}}
                  />
                </Grid>
              </Grid>
              <Typography variant="body1">
                Outras tecnologias com as quais estou habituado são:
              </Typography>
              <Grid item container justify="space-around"style={{paddingTop: '0.2em'}}>
                <Chip
                  label={'axios'}
                  className={classes.chipHobby}
                  style={{cursor: 'default'}}
                  target="foobar"
                  rel="nooponer"
                />
                <Chip
                  label={'material-ui'}
                  className={classes.chipHobby}
                  style={{cursor: 'default'}}
                  target="foobar"
                  rel="nooponer"
                />
                <Chip
                  label={'styled-components'}
                  className={classes.chipHobby}
                  style={{cursor: 'default'}}
                  target="foobar"
                  rel="nooponer"
                />
                <Chip
                  label={'postgreSQL'}
                  className={classes.chipHobby}
                  style={{cursor: 'default'}}
                  target="foobar"
                  rel="nooponer"
                />
                <Chip
                  label={'MongoDB'}
                  className={classes.chipHobby}
                  style={{cursor: 'default'}}
                  target="foobar"
                  rel="nooponer"
                />
                <Chip
                  label={'sequelize'}
                  className={classes.chipHobby}
                  style={{cursor: 'default'}}
                  target="foobar"
                  rel="nooponer"
                />
              </Grid>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
}
