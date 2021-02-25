import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedinIcon from '@material-ui/icons/LinkedIn';
import GmailIcon from '@material-ui/icons/Email';
import TwitterIcon from '@material-ui/icons/Twitter';
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
  content: "Hello. My name is Marcial Rico Pozas and I'm an undergraduated student currently studying Software Engineering at University de Oviedo."
}

export default function AboutMe() {
  const classes = useStyles();
  return (
    <main>
      <Grid container spacing={5} className={classes.mainGrid}>
        <Main title="About me" content={content}  xs = {12} md = {8}/>
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