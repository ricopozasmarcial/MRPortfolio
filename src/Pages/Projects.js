import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Main from '../Components/Main';
import Footer from '../Components/Footer';
import GridComponent from '../Components/GridComponent';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  
}));

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
        <main>
          <Grid container spacing={5} className={classes.mainGrid}>
            <Main title="Most relevant projects" content={content}  xs = {12} md = {12}/>
          </Grid>
            <GridComponent tileData={tileData}/>
          <Footer/>
        </main>
  );
}