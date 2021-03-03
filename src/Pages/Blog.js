import React from 'react';
import Grid from '@material-ui/core/Grid';
import Main from '../Components/Main';
import Sidebar from '../Components/Sidebar';
import {socialSideBar, useStyles} from './Constants';

const content = {
  content: 'This page was made using the React for Javascript and it serves as a presentation of myself and of all my work that I\'ve contributed creating or created. I hope you enjoy your visit and if you are interested there is information available regarding all my social and my email.',
};

export default function Blog() {
  const classes = useStyles();
  return ( 
    <main >
      <Grid container spacing={5} className={classes.mainGrid}>
        <Main title="Welcome" content={content}  xs = {12} md = {8}/>
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
