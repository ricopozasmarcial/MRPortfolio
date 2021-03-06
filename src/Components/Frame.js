import React, { useState, useEffect } from "react";
import {GlobalStyles} from './Global';
import { ThemeProvider } from 'styled-components';
import { Switch, Route, Redirect } from "react-router-dom";
import Blog from "../Pages/Blog";
import MenuIcon from "@material-ui/icons/Menu";
import Aptitudes from "../Pages/Aptitudes";
import HomeIcon from '@material-ui/icons/Home';
import ProjectsIcon from '@material-ui/icons/Archive';
import AptitudesIcon from '@material-ui/icons/Book';
import Projects from "../Pages/Projects";
import MainFeaturedPost from "../Components/MainFeaturedPost";
import Container from '@material-ui/core/Container';
import {GreenDiv, style2, lightTheme, darkTheme} from '../Pages/Constants';
import {Toolbar,makeStyles,Button,IconButton,Drawer,AppBar} from "@material-ui/core";
import Footer from '../Components/Footer';
import MoonIcon from '@material-ui/icons/NightsStay';

const useStyles = makeStyles(() => ({
  toolbarSecondary: {
    justifyContent: 'space-between',
  },
}));

const sections = [
  { title: 'Home', url: '/MRPortfolio/#/Welcome' , icon: <HomeIcon id="icon"/> },
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
        <div>
          {sections.map((section) => (     
          <Button
            key={section.title}
            href={section.url}
            className={classes.toolbarLink}
            startIcon={section.icon}
          >
            <div id="navtxt" href="">{section.title}</div>
          </Button>    
        ))} 
         </div>
          <Button variant="outlined" onClick={toggleTheme} startIcon={<MoonIcon id="icon"/>}>
            <div id="navtxt2" href="">Toggle Dark Mode</div>
          </Button>
       
       
      </Toolbar>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <AppBar position="static" id="main" style={{boxShadow: '2px 3px 3px  rgba(0,0,0,0)'}}>
      <Toolbar>
        <IconButton
          {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
            id :"icon",
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
                  <div id="navtxt">
                    {section.title}
                  </div>
                </Button>
              </li> 
              ))}
              <li>
                <Button variant="outlined" onClick={toggleTheme} startIcon={<MoonIcon id="icon"/>}>
                   <div id="navtxt2">Toggle Dark Mode</div>
                </Button>
              </li>
            </ul> 
          </div>
        </Drawer> 
      </Toolbar>
      </AppBar>
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

