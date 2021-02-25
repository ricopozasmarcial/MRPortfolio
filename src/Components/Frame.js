import React , { useState }from 'react';
import {GlobalStyles} from '../Components/global';
import { ThemeProvider } from 'styled-components';
import { Switch, Route, Redirect } from "react-router-dom";
import Blog from "../Pages/Blog";
import AboutMe from "../Pages/AboutMe";
import Aptitudes from "../Pages/Aptitudes";
import Projects from "../Pages/Projects";
import Header from "../Components/Header";
import MainFeaturedPost from "../Components/MainFeaturedPost";
import Container from '@material-ui/core/Container';
import {GreenDiv, style2, lightTheme, darkTheme} from '../Pages/constants';
import Footer from '../Components/Footer';
import MoonIcon from '@material-ui/icons/NightsStay';
import { Button } from '@material-ui/core';

export default function Frames() {
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
    return (   
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>    
        <GlobalStyles/>
        <GreenDiv id="back">
            <Container maxWidth="lg" style={style2} id="main" >

            <Header/>
            <Button  onClick={toggleTheme} endIcon={<MoonIcon id="icon"/>}><a id="navtxt2">Toggle Dark Mode</a></Button>
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

