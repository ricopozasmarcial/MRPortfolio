import React from 'react';
import Grid from '@material-ui/core/Grid';
import Main from '../Components/Main';
import Sidebar from '../Components/Sidebar';
import {socialSideBar, useStyles} from './constants';

const content = {
  content: "Hello. My name is Marcial Rico Pozas and I'm an undergraduated student currently studying Software Engineering at University de Oviedo."
}

export default function AboutMe() {
  const classes = useStyles();
  return (
    <main>
      <Grid container spacing={5} className={classes.mainGrid}>
        <Main title="About me" content={content}  xs = {12} md = {8}/>
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