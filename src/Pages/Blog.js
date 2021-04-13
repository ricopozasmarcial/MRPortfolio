import React from 'react';
import Grid from '@material-ui/core/Grid';
import Main from '../Components/Main';
import Sidebar from '../Components/Sidebar';
import {socialSideBar, useStyles} from './Constants';

const content = {
  content: "Hello visitor! Welcome, my name is Marcial Rico Pozas and I'm an undergraduated student currently studying Software Engineering at University of Oviedo.",
  content3: "This page was made using React JS and Node JS and it serves as a presentation of myself and of all my work that I've contributed creating or created myself. ",
  content4: "I hope you enjoy your visit and if you are interested there is information available regarding all my social media accounts and my personal email.",
  content2: "I want to introduce myself a little bit before going forward. I was born in March 6th 1999 in Asturias, Spain. Growing up I fell in love with everything tech related and I've developed my passion in many ways. From fixing all my relatives and friend's PCs and phones to try and develop my own games and apps. I consider myself as a very creative person willing to learn new things and aquire new skills. I'm also open to constructive criticism since it's the key to grow and essential to work in teams. ",
};

export default function Blog() {
  const classes = useStyles();
  return ( 
    <main >
      <Grid container spacing={5} className={classes.mainGrid}>
        <Main title="Welcome" content={content}  xs = {12} md = {8} isWelcome={true}/>
        <Sidebar
          title={socialSideBar.title}
          description={socialSideBar.description}
          archives={socialSideBar.archives}
          social={socialSideBar.social}
        />
      </Grid>   
    </main>
  );
}
