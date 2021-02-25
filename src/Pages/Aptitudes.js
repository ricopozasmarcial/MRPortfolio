import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
  title: 'Resources',

  social: [
    { name: 'Download Curriculum Vitae', icon: DownloadIcon , link: 'CV_Rico-Pozas-Marcial.pdf' },
    { name: 'Linkedin', icon: LinkedinIcon, link: 'https://www.linkedin.com/in/marcial-rico-pozas-b2a4a51b0/' },
  ],
};

const content = {
  content: 'This page displays some of my skills and capabilities in regards of software developing and other areas. Also you will have the option of downloading a copy of my CV.',
};

const style = {
  backgroundImage: 'linear-gradient(to bottom right, lightblue, lightgreen, lightyellow)',
  backgroundSize: "contain",
  backgroundRepeat: "repeat",
  zIndex:"99",
  height: "100vh",
};

const style2 = {
  backgroundColor: 'white',
  backgroundSize: "cover",
  backgroundRepeat: "repeat",
  zIndex:"1",
  borderRadius: "0 0 5px 5px",
};

export default function Aptitudes() {
  const classes = useStyles();

  return (
    <div style={style}>
      <Container maxWidth="lg" style={style2} >
        <Header title="React Portfolio" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={5} className={classes.mainGrid}>
            <Main title="Aptitudes, skills and qualifications" content={content}  xs = {12} md = {8}/>
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
              <Footer  description="Created with React by Marcial Rico Pozas" />
          </Grid>
        </main>
      </Container>
    </div>
  );
}