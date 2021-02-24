import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Header from '../Components/Header';
import { GridList, GridListTile, GridListTileBar} from "@material-ui/core";
import MainFeaturedPost from '../Components/MainFeaturedPost';
import Main from '../Components/Main';
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

const content = {
  content: '',
};

const tileData = [
  {
    img: "Cynthia.png",
    title: "Cynthia",
    id: "prueba4",
    description: "UE4 Horror game"
  },
  {
    img: "AmongCars.jpeg",
    title: "Among Cars",
    id: "prueba9",
    description: "Unity VR Horror game"
  },
  {
    img: "NPC.png",
    title: "NPC Companion App",
    id: "prueba13",
    description: "AR App made with Unity+Vuforia"
  },
  {
    img: "Viade.png",
    title: "Viade es_1b",
    id: "prueba17",
    description: "Route management app using React + Solid"
  },
  {
    img: "Ratattack.png",
    title: "RatAttack",
    id: "prueba3",
    description: "UE4 Adventure game"
  },
  {
    img: "Portfolio.png",
    title: "MyPortfolio",
    id: "prueba16",
    description: "Portfolio made with React"
  },
];

const handleClick = (e) => {
  
};

export default function Projects() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Portfolio" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={5} className={classes.mainGrid}>
            <Main title="Most relevant projects" content={content} xs = '12' md = '12'/>
          </Grid>
          <GridList
            cols={4}
            className="third"
            >
            {tileData.map((tile) => (
              <GridListTile key={tile.img}>
                <img
                  src={tile.img}
                  alt={tile.title}
                  id={tile.id}
                  draggable="false"
                />
                <GridListTileBar
                  title={tile.title}
                  subtitle={tile.description}
                />
              </GridListTile>
            ))}
          </GridList>
        </main>
      </Container>
      <Footer title="My Portfolio" description="Created with React by Marcial Rico Pozas" />
    </React.Fragment>
  );
}