import React, { useState } from "react";
import {
  AppBar,
  Tabs,
  Tab,
  Toolbar,
  useMediaQuery,
  SwipeableDrawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Grid,
} from "@material-ui/core";
import { Menu as MenuIcon, Close as CloseIcon } from "@material-ui/icons";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    height: "5rem",
  },
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "1em",
  },
  tabs: {
    marginLeft: "auto",
    marginRight: "20px",
    height: "5rem",
    alignItems: "center",
  },

  tab: {
    textDecoration: "none",
    ...theme.typography.menu,
    minWidth: "8rem",
    height: "5rem",
    marginLeft: "20px",
    opacity: 0.7,
    fontWeight: 700,
  },
  selectedTab: {
    opacity: 1,
    color: theme.palette.common.white,
  },
  menuButton: {
    marginLeft: "auto",
  },
  menuButtonIcon: {
    height: "38px",
    width: "38px",
    color: theme.palette.common.white,
    opacity: 0.9,
  },
  drawer: {
    backgroundColor: theme.palette.common.blue,
    width: 200,
    zIndex: 1301,
    marginTop: "1em",
  },
  listItem: {
    color: theme.palette.common.white,
    ...theme.typography.menu,
    opacity: 0.7,
    padding: "0.25rem",
  },

  listItemSelected: {
    opacity: 1,
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  //Melhora a performance em iOS
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const [openMenu, setOpenMenu] = useState(false);

  const handleTabClick = (event, value) => {
    props.setSelectedLink(value);
  };

  const tabs = (
    <React.Fragment>
      <Tabs
        indicatorColor="secondary"
        textColor="secondary"
        value={props.selectedLink}
        className={classes.tabs}
      >
        {props.routes.map((route, index) => (
          <Tab
            key={`${route.link}+${index}`}
            disableRipple
            selected={route.link === props.selectedLink}
            component={Link}
            to={route.link}
            value={route.link}
            label={route.text}
            onClick={(event) => handleTabClick(event, route.link)}
            className={`${
              route.link === props.selectedLink ? classes.selectedTab : null
            } ${classes.tab}`}
          ></Tab>
        ))}
      </Tabs>
    </React.Fragment>
  );

  const drawer = (
    <React.Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openMenu}
        onOpen={() => setOpenMenu(true)}
        onClose={() => setOpenMenu(false)}
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.toolbarMargin} />
        <List disablePadding>
          {props.routes.map((route, index) => (
            <ListItem
              divider
              button
              disableRipple
              key={`${route.link}${index}`}
              onClick={() => {
                setOpenMenu(false);
                props.setSelectedLink(route.link);
              }}
              component={Link}
              to={route.link}
              selected={route.link === props.selectedLink}
            >
              <ListItemText
                disableTypography
                className={`${classes.listItem} ${
                  route.link === props.selectedLink
                    ? classes.listItemSelected
                    : null
                }`}
              >
                {route.text}
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </SwipeableDrawer>
      <IconButton
      disableRipple
        onClick={() => setOpenMenu(!openMenu)}
        className={classes.menuButton}
      >
        {openMenu ? (
          <CloseIcon className={classes.menuButtonIcon} />
        ) : (
          <MenuIcon className={classes.menuButtonIcon} />
        )}
      </IconButton>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <AppBar
        position="fixed"
        style={{ zIndex: 1302 }}
        className={classes.appBar}
      >
        <Grid
          container
          direction="row"
          justify={matchesMD ? "flex-end" : "center"}
        >
          <Toolbar disableGutters className={classes.toolbar}>
            {matchesMD ? drawer : tabs}
          </Toolbar>
        </Grid>
      </AppBar>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
}
