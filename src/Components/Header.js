import PropTypes from 'prop-types';
import HomeIcon from '@material-ui/icons/Home';
import AboutMeIcon from '@material-ui/icons/Person';
import ProjectsIcon from '@material-ui/icons/Archive';
import AptitudesIcon from '@material-ui/icons/Book';
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Button,
  IconButton,
  Drawer,
  Link,
  MenuItem,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-around',
    overflowX: 'hidden',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
  root: {
    height: 180,
  },
  container: {
    display: 'flex',
  },
  paper: {
    margin: theme.spacing(1),
  },
  svg: {
    width: 100,
    height: 100,
  },
  polygon: {
    fill: theme.palette.common.white,
    stroke: theme.palette.divider,
    strokeWidth: 1,
  },
  header: {
    backgroundColor: "#400CCC",
    paddingRight: "79px",
    paddingLeft: "118px",
    "@media (max-width: 900px)": {
      paddingLeft: 0,
    },
  },
  logo: {
    fontFamily: "Work Sans, sans-serif",
    fontWeight: 600,
    color: "#FFFEFE",
    textAlign: "left",
  },
  menuButton: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    size: "18px",
    marginLeft: "38px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-around",
  },
  drawerContainer: {
    padding: "20px 30px",
  },
}));

const sections = [
  { title: 'Home', url: '/MRPortfolio/#/Welcome' , icon: <HomeIcon id="icon"/> },
  { title: 'About me', url: '/MRPortfolio/#/AboutMe' , icon: <AboutMeIcon id="icon"/> },
  { title: 'Projects', url: '/MRPortfolio/#/Projects' , icon: <ProjectsIcon id="icon"/> },
  { title: 'Aptitudes', url: '/MRPortfolio/#/Aptitudes' , icon: <AptitudesIcon id="icon"/> },
];

export default function Header(props) {

  const { toolbar, drawerContainer } = useStyles();

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());
  }, []);

  const displayDesktop = () => {
    return (
      <Toolbar className={classes.toolbarSecondary}>
        <div>{sections.map((section) => (     
          <Button
            key={section.title}
            href={section.url}
            className={classes.toolbarLink}
            endIcon={section.icon}
          >
            <a id="navtxt">{section.title}</a>
          </Button>    
        ))}</div>
      </Toolbar>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar>
        <IconButton
          {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={drawerContainer}><ul style={{listStyle: "none"}}>{sections.map((section) => (     
            <li><Button
              key={section.title}
              href={section.url}
              className={classes.toolbarLink}
              startIcon={section.icon}
            >
              <a id="navtxt">{section.title}</a>
            </Button></li> 
            ))}</ul> 
          </div>
        </Drawer> 
      </Toolbar>
    );
  };
  const classes = useStyles();
  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
         React Portfolio
        </Typography>
      </Toolbar>
      <Toolbar component="nav"  className={classes.toolbarSecondary}>
      {mobileView ? displayMobile() : displayDesktop()}
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};


