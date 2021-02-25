import React, { useState, useEffect } from "react";
import {GlobalStyles} from '../Components/global';
import { ThemeProvider } from 'styled-components';
import { Switch, Route, Redirect } from "react-router-dom";
import Blog from "../Pages/Blog";
import AboutMe from "../Pages/AboutMe";
import MenuIcon from "@material-ui/icons/Menu";
import Aptitudes from "../Pages/Aptitudes";
import HomeIcon from '@material-ui/icons/Home';
import AboutMeIcon from '@material-ui/icons/Person';
import ProjectsIcon from '@material-ui/icons/Archive';
import AptitudesIcon from '@material-ui/icons/Book';
import Projects from "../Pages/Projects";
import MainFeaturedPost from "../Components/MainFeaturedPost";
import Container from '@material-ui/core/Container';
import {GreenDiv, style2, lightTheme, darkTheme} from '../Pages/constants';
import {Toolbar,makeStyles,Button,IconButton,Drawer,} from "@material-ui/core";
import Footer from '../Components/Footer';
import MoonIcon from '@material-ui/icons/NightsStay';

const useStyles = makeStyles(() => ({
  toolbarSecondary: {
    justifyContent: 'space-around',
    overflowX: 'hidden',
    width: '50',
  },
}));

const sections = [
  { title: 'Home', url: '/MRPortfolio/#/Welcome' , icon: <HomeIcon id="icon"/> },
  { title: 'About me', url: '/MRPortfolio/#/AboutMe' , icon: <AboutMeIcon id="icon"/> },
  { title: 'Projects', url: '/MRPortfolio/#/Projects' , icon: <ProjectsIcon id="icon"/> },
  { title: 'Aptitudes', url: '/MRPortfolio/#/Aptitudes' , icon: <AptitudesIcon id="icon"/> },
];

export default function Frames() {

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
    },[]
  );

  const displayDesktop = () => {
    return (
      <Toolbar className={classes.toolbarSecondary}>
        <div>{sections.map((section) => (     
          <Button
            key={section.title}
            href={section.url}
            className={classes.toolbarLink}
            startIcon={section.icon}
          >
            <a id="navtxt">{section.title}</a>
          </Button>    
        ))} 
          <Button variant="outlined" onClick={toggleTheme} startIcon={<MoonIcon id="icon"/>}>
            <a id="navtxt2">Toggle Dark Mode</a>
          </Button>
        </div>
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
          <div id ="navLite">
            <ul style={{listStyle: "none"}}>{sections.map((section) => (     
              <li>
                <Button
                  key={section.title}
                  href={section.url}
                  className={classes.toolbarLink}
                  startIcon={section.icon}
                  >
                  <a id="navtxt">
                    {section.title}
                  </a>
                </Button>
              </li> 
              ))}
              <li>
                <Button variant="outlined" onClick={toggleTheme} startIcon={<MoonIcon id="icon"/>}>
                  <a id="navtxt2">Toggle Dark Mode</a>
                </Button>
              </li>
            </ul> 
          </div>
        </Drawer> 
      </Toolbar>
    );
  };
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      document.getElementById("navtxt2").innerHTML= "Disable dark mode";
    } else {
      setTheme('light');
      document.getElementById("navtxt2").innerHTML= "Toggle dark mode";
    }
  }
  const classes = useStyles();
  return (   
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>    
      <GlobalStyles/>
        <GreenDiv id="back">
            <Container maxWidth="lg" style={style2} id="main" >
              {mobileView ? displayMobile() : displayDesktop()}
              <MainFeaturedPost/>
                <Switch>
                    <Route exact path="/Welcome" component={Blog} />
                    <Route exact path="/AboutMe" component={AboutMe} />
                    <Route exact path="/Projects" component={Projects} />
                    <Route exact path="/Aptitudes" component={Aptitudes} />
                    <Route exact path="/*" component={Blog} />
                    <Redirect to="/"></Redirect>
                </Switch>
                
                <Footer/>
            </Container>
        </GreenDiv>
    </ThemeProvider>     
  );
}

