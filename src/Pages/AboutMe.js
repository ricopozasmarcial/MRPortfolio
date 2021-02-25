import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedinIcon from '@material-ui/icons/LinkedIn';
import GmailIcon from '@material-ui/icons/Email';
import TwitterIcon from '@material-ui/icons/Twitter';
import Header from '../Components/Header';
import MainFeaturedPost from '../Components/MainFeaturedPost';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Sidebar from '../Components/Sidebar';
import Footer from '../Components/Footer';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const sections = [
  { title: 'Home', url: '/MRPortfolio/#/Welcome' },
  { title: 'About me', url: '/MRPortfolio/#/AboutMe' },
  { title: 'Projects', url: '/MRPortfolio/#/Projects' },
  { title: 'Aptitudes', url: '/MRPortfolio/#/Aptitudes' },
];

const mainFeaturedPost = {
  title: 'Marcial Rico',
  description:
    "Undergraduated student currently studying Software Engineering at University of Oviedo",
  image: 'https://source.unsplash.com/random',
 
};

const sidebar = {
  title: 'Social',

  social: [
    { name: 'GitHub', icon: GitHubIcon , link: 'https://github.com/ricopozasmarcial' },
    { name: 'Twitter', icon: TwitterIcon, link: 'https://twitter.com/marchute99' },
    { name: 'Linkedin', icon: LinkedinIcon, link: 'https://www.linkedin.com/in/marcial-rico-pozas-b2a4a51b0/' },
    { name: 'Email', icon: GmailIcon, link: 'mailto:marshall6399@gmail.com' },
  ],
};

export default function AboutMe() {
  const classes = useStyles();

  return (
    <div style={{ backgroundImage: `linear-gradient(to bottom right, lightblue, lightgreen)`, backgroundRepeat: `repeat`,backgroundAttachment: `fixed`, height:`100vh` }}>
    
      <Container maxWidth="lg">
        <Header title="React Portfolio" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={5} className={classes.mainGrid}>
            <Grid item xs={12} md={8}>
                <Typography variant="h6" gutterBottom>
                  About me
                </Typography>
                <Divider />
                    <a>Hello. My name is Marcial Rico Pozas and I'm an undergraduated 
                    student currently studying Software Engineering at University de Oviedo. 
                    This site was made as a showcase of who I am and what are my capabilities 
                    and projects I've been a part of.</a> 
                    
                    <a>I've always been interested in computers 
                    and how software was made since I was a little kid. I enrolled the degree of 
                    Software Engineering in hopes of dedicating my career toward something I always 
                    loved and I'm on a journey of discovering what I'm really passionate about. 
                    Some of my hobbies are PC Hardware in general, gaming, developing games and all 
                    kinds of VR software. I hope this little project helps you know me a little better 
                    and I hope you enjoy your visit.</a>
            </Grid>
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
             <Footer title="My Portfolio" description="Created with React by Marcial Rico Pozas" />
          </Grid>
        </main>
       
      </Container>
     
    </div>
  );
}