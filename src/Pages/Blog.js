import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedinIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import GmailIcon from '@material-ui/icons/Email';
import Main from '../Components/Main';
import Sidebar from '../Components/Sidebar';
import Footer from '../Components/Footer';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));



const sidebar = {
  title: 'Social',
  social: [
    { name: 'GitHub', icon: GitHubIcon , link: 'https://github.com/ricopozasmarcial' },
    { name: 'Twitter', icon: TwitterIcon, link: 'https://twitter.com/marchute99' },
    { name: 'Linkedin', icon: LinkedinIcon, link: 'https://www.linkedin.com/in/marcial-rico-pozas-b2a4a51b0/' },
    { name: 'Email', icon: GmailIcon, link: 'mailto:marshall6399@gmail.com' },
  ],
};

const content = {
  content: 'This page was made using the React for Javascript and it serves as a presentation of myself and of all my work that I\'ve contributed or created . I hope you enjoy your visit and if you are interested there is information available regarding all my social and my email.',
};

export default function Blog() {
  const classes = useStyles();
  return ( 
    <main >
      <Grid container spacing={5} className={classes.mainGrid}>
        <Main title="Welcome" content={content}  xs = {12} md = {8}/>
        <Sidebar
          title={sidebar.title}
          description={sidebar.description}
          archives={sidebar.archives}
          social={sidebar.social}
        />
        <Footer/>
      </Grid>   
    </main>
  );
}
