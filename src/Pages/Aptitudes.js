import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import DownloadIcon from '@material-ui/icons/CloudDownload';
import LinkedinIcon from '@material-ui/icons/LinkedIn';
import Header from '../Components/Header';
import MainFeaturedPost from '../Components/MainFeaturedPost';
import Main from '../Components/Main';
import Sidebar from '../Components/Sidebar';
import Footer from '../Components/Footer';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const sections = [
  { title: 'Home', url: '/MyReactPortfolio/#/Welcome' },
  { title: 'About me', url: '/MyReactPortfolio/#/AboutMe' },
  { title: 'Projects', url: '/MyReactPortfolio/#/Projects' },
  { title: 'Aptitudes', url: '/MyReactPortfolio/#/Aptitudes' },
];

const mainFeaturedPost = {
  title: 'Marcial Rico Pozas',
  description:
    "Undergraduated student currently studying Software Engineering at University of Oviedo",
  image: 'https://source.unsplash.com/random',
 
};

const sidebar = {
  title: 'Resources',

  social: [
    { name: 'Download Curriculum Vitae', icon: DownloadIcon , link: 'CV_Rico-Pozas-Marcial.pdf' },
    { name: 'Linkedin', icon: LinkedinIcon, link: 'https://www.linkedin.com/in/marcial-rico-pozas-b2a4a51b0/' },
  ],
};

const content = {
  content: 'This page displays some of my skills and capabilities in regards of software developing and other areas. Also you will have the option of downloading a copy of my CV.',
};


export default function Aptitudes() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Portfolio" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={5} className={classes.mainGrid}>
            <Main title="Aptitudes, skills and qualifications" content={content}  xs = '12' md = '8'/>
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer title="My Portfolio" description="Created with React by Marcial Rico Pozas" />
    </React.Fragment>
  );
}