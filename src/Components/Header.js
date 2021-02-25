import PropTypes from 'prop-types';
import HomeIcon from '@material-ui/icons/Home';
import AboutMeIcon from '@material-ui/icons/Person';
import ProjectsIcon from '@material-ui/icons/Archive';
import AptitudesIcon from '@material-ui/icons/Book';
import {Toolbar,makeStyles,Button,IconButton,Drawer,} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState, useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  toolbarSecondary: {
    justifyContent: 'space-around',
    overflowX: 'hidden',
  },
}));

const sections = [
  { title: 'Home', url: '/MRPortfolio/#/Welcome' , icon: <HomeIcon id="icon"/> },
  { title: 'About me', url: '/MRPortfolio/#/AboutMe' , icon: <AboutMeIcon id="icon"/> },
  { title: 'Projects', url: '/MRPortfolio/#/Projects' , icon: <ProjectsIcon id="icon"/> },
  { title: 'Aptitudes', url: '/MRPortfolio/#/Aptitudes' , icon: <AptitudesIcon id="icon"/> },
];

export default function Header(props) {

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
            anchor: "top",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
          >
          <div id ="navLite"><ul style={{listStyle: "none"}}>{sections.map((section) => (     
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


