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
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

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

const content = {
  content: '',
};

const tileData = [
  {
    img: "Cynthia.png",
    title: "Cynthia",
    id: "item1",
    link: "https://kryystinn.itch.io/cynthia",
    description: "UE4 Horror game"
  },
  {
    img: "AmongCars.jpeg",
    title: "Among Cars",
    id: "item2",
    link: "https://github.com/ricopozasmarcial/AmongCars",
    description: "Unity VR Horror game"
  },
  {
    img: "NPC.png",
    title: "NPC Companion App",
    id: "item3",
    link: "https://github.com/ricopozasmarcial/RAA-Proyecto-Individual",
    description: "AR App made with Unity+Vuforia"
  },
  {
    img: "Viade.png",
    title: "Viade es_1b",
    id: "item4",
    link: "https://github.com/ricopozasmarcial/viade_es1b",
    description: "Route management app using React + Solid"
  },
  {
    img: "Ratattack.png",
    title: "RatAttack",
    id: "item5",
    link: "https://github.com/ricopozasmarcial/RatAttack",
    description: "UE4 Adventure game"
  },
  {
    img: "Portfolio.png",
    title: "MyPortfolio",
    id: "item6",
    link: "https://github.com/ricopozasmarcial/MyReactPortfolio",
    description: "Portfolio made with React"
  },
];

export default function Projects() {
  const classes = useStyles();

  return (
    <React.Fragment>
    
      <Container maxWidth="lg">
        <Header title="React Portfolio" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={5} className={classes.mainGrid}>
            <Main title="Most relevant projects" content={content} xs = '12' md = '12'/>
          </Grid>
          <GridList
            cellHeight = "180"
            cols={3}
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
                  actionIcon={
                    <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                      <a href={tile.link}>
                          <InfoIcon/>
                      </a>
                    </IconButton>
                  }
                />
              </GridListTile>
              
            ))}
            
          </GridList>
          <Footer title="My Portfolio" description="Created with React by Marcial Rico Pozas" />
        </main>
      </Container>
      
    </React.Fragment>
  );
}