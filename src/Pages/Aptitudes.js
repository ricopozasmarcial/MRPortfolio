import React from 'react';
import Grid from '@material-ui/core/Grid';
import Main from '../Components/Main';
import Sidebar from '../Components/Sidebar';
import {resourcesSideBar, useStyles} from './Constants';
const content = {
  content: 'Down below there is a list of my aptitudes, abilities, skills and qualifications. Also youhave the option of downloading a copy of my CV in either English or Spanish and a link to my LinkedIn profile.',
};

export default function Aptitudes() {
  const classes = useStyles();
  return (   
    <main>
      <Grid container spacing={5} className={classes.mainGrid}>
        <Main title="Aptitudes, skills and qualifications" content={content} xs = {12} md = {8} isAptitude={true}/> 
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