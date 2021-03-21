import React from "react";
import { Link } from "react-router-dom";
import {
  Grid,
  Typography,
  Button,
  IconButton,
  Hidden,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Favorite as FavoriteIcon,
  Instagram as InstagramIcon,
  Facebook as FacebookIcon,
  GitHub as GithubIcon,
  LinkedIn as LinkedInIcon,
  Phone as PhoneIcon,
  Mail as MailIcon,
  PersonPin as PersonPinCircleIcon,
} from "@material-ui/icons/";
const useStyles = makeStyles((theme) => ({
  footerContainer: {
    
    ...theme.typography.body1,
    width: "100%",
    backgroundColor: theme.palette.common.blue,
  },
  footerContact: {
    height: "12em",
    padding: "0.5em",
  },
  footerBottom: {
    padding: "0.5em",
  },
  footerNav: {
    width: "30em",
  },
  navButton: {
    ...theme.typography.body1,
    color: theme.palette.common.white,
    borderRadius: 0,
    textTransform: "none",
    marginTop: "0.5em",
    height: "2em",
    width: "10em",
  },
  footerInfo: {
    width: "30em",
  },
  contactItem: {
    color: theme.palette.common.white,
    padding: "0.5em",
  },
}));

export default function Footer(props) {
  const theme = useTheme();
  const classes = useStyles();
  return (
    <Grid container direction="row" className={classes.footerContainer}>
      <Hidden mdDown>
        <Grid
          item
          container
          direction="row"
          justify="space-around"
          className={classes.footerContact}
        >
          <Grid
            item
            container
            direction="column"
            alignItems="flex-end"
            className={classes.footerNav}
          >
            <Button
              disableRipple
              variant="text"
              component={Link}
              onClick={() => props.setSelectedLink("/")}
              to="/"
              className={classes.navButton}
            >
              <Typography
                variant="body1"
                align="right"
                style={{ padding: "0.5em", width: "100%" }}
              >
                Início
              </Typography>
            </Button>
            <Button
              disableRipple
              variant="text"
              component={Link}
              onClick={() => props.setSelectedLink("/projetos")}
              to="/projetos"
              className={classes.navButton}
            >
              <Typography
                variant="body1"
                align="right"
                style={{ padding: "0.5em", width: "100%" }}
              >
                Projetos
              </Typography>
            </Button>
            <Button
              disableRipple
              variant="text"
              component={Link}
              onClick={() => props.setSelectedLink("/sobre")}
              to="/sobre"
              className={classes.navButton}
            >
              <Typography
                variant="body1"
                align="right"
                style={{ padding: "0.5em", width: "100%" }}
              >
                Sobre Mim
              </Typography>
            </Button>
            <Button
              disableRipple
              variant="text"
              component={Link}
              onClick={() => props.setSelectedLink("/contato")}
              to="/contato"
              className={classes.navButton}
            >
              <Typography
                variant="body1"
                align="right"
                style={{ padding: "0.5em", width: "100%" }}
              >
                Contato
              </Typography>
            </Button>
          </Grid>
          <Grid
            item
            container
            direction="column"
            justify="center"
            className={classes.footerInfo}
          >
            <Grid
              item
              container
              alignItems="center"
              className={classes.contactItem}
            >
              <MailIcon />
              <Typography variant="body1">
                <span style={{ margin: "0.5em" }} />
                jorgevinicius101001@gmail.com
              </Typography>
            </Grid>
            <Grid
              item
              container
              alignItems="center"
              className={classes.contactItem}
            >
              <PhoneIcon />
              <Typography variant="body1">
                <span style={{ margin: "0.5em" }} />
                +55 (79) 99658-6902
              </Typography>
            </Grid>
            <Grid
              item
              container
              aligntems="center"
              className={classes.contactItem}
            >
              <PersonPinCircleIcon />
              <Typography variant="body1">
                <span style={{ margin: "0.5em" }} />
                Aracaju, SE
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <Grid
        item
        container
        direction="column"
        alignItems="center"
        justify="flex-end"
        className={classes.footerBottom}
      >
        <Grid item container justify="center">
          <IconButton
            component="a"
            href="https://github.com/xorj/"
            target="foobar"
            rel="nooponer"
          >
            <GithubIcon
              fontSize="large"
              style={{ color: theme.palette.common.white }}
            />
          </IconButton>
          <IconButton
            component="a"
            href="https://www.facebook.com/jorge101001"
            target="foobar"
            rel="nooponer"
          >
            <FacebookIcon
              fontSize="large"
              style={{ color: theme.palette.common.white }}
            />
          </IconButton>
          <IconButton
            component="a"
            href="https://www.linkedin.com/in/jorge-vinicius-lourenco/"
            target="foobar"
            rel="nooponer"
          >
            <LinkedInIcon
              fontSize="large"
              style={{ color: theme.palette.common.white }}
            />
          </IconButton>
          <IconButton
            component="a"
            href="https://www.instagram.com/xorj._/"
            target="foobar"
            rel="nooponer"
          >
            <InstagramIcon
              fontSize="large"
              style={{ color: theme.palette.common.white }}
            />
          </IconButton>
        </Grid>
        <Grid
          item
          container
          alignItems="center"
          justify="center"
          style={{ padding: "0.5em" }}
        >
          <Typography
            variant="body1"
            style={{ color: theme.palette.common.white }}
          >
            Feito com
          </Typography>
          <span style={{ margin: "0.2em" }} />
          <FavoriteIcon style={{ color: theme.palette.common.razz }} />
          <span style={{ margin: "0.2em" }} />
          <Typography
            variant="body1"
            style={{ color: theme.palette.common.white }}
          >
            por Jorge
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
