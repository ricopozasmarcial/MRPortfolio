import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { GridList, GridListTile, GridListTileBar} from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles((theme) => ({
      styleGrid :{
        borderRadius: "15px 155px 5px 5px",
      },
}));

export default function Grid(props) {
  const classes = useStyles();
  const { tileData } = props;

  const [state, setState] = useState({
    mobileView: false,
  });

  const { mobileView} = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
      };
      setResponsiveness();
      window.addEventListener("resize", () => setResponsiveness());
    },[]
  );

  const displayDesktop = () => {
    return (
      <GridList
      cellHeight = {180}
      cols={4}
      className="third"
      >
      {tileData.map((tile) => ( 
        <GridListTile key={tile.img} className={classes.styleGrid}> 
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
              <IconButton aria-label={`info about ${tile.title}`} className={classes.icon} >
                <a href={tile.link}>
                    <InfoIcon id="icon"/>
                </a>
              </IconButton>
            }
          />
        </GridListTile>
      ))}
    </GridList>
    );
  };

  const displayMobile = () => {
    return (
      <GridList
      cellHeight = {180}
      cols={1}
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
              <IconButton aria-label={`info about ${tile.title}`} className={classes.icon} >
                <a href={tile.link}>
                    <InfoIcon  id= "icon"/>
                </a>
              </IconButton>
            }
          />
        </GridListTile> 
      ))}  
    </GridList>
    );
  }
  return (
    <React.Fragment>
      {mobileView ? displayMobile() : displayDesktop()}
    </React.Fragment>      
  );
}

Grid.propTypes = {
  tileData: PropTypes.array,
};