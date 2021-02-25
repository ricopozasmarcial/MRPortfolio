import React from 'react';
import Grid from '@material-ui/core/Grid';
import Main from '../Components/Main';
import Sidebar from '../Components/Sidebar';
import {resourcesSideBar, useStyles} from './constants';

const content = {
  content: 'This page displays some of my skills and capabilities in regards of software developing and other areas. Also you will have the option of downloading a copy of my CV.',
};

export default function Aptitudes() {
  const classes = useStyles();
  return (   
    <main>
      <Grid container spacing={5} className={classes.mainGrid}>
        <Main title="Aptitudes, skills and qualifications" content={content}  xs = {12} md = {8}/>
        <Sidebar
          title={resourcesSideBar.title}
          description={resourcesSideBar.description}
          archives={resourcesSideBar.archives}
          social={resourcesSideBar.social}
        />
      </Grid>
    </main>
  );
}