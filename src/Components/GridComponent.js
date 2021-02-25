import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { GridList, GridListTile, GridListTileBar} from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles((theme) => ({
    mainGrid: {
        marginTop: theme.spacing(3),
      },
}));

export default function Grid(props) {
  const classes = useStyles();
  const { tileData } = props;

  return (
    <React.Fragment>
                <GridList
            cellHeight = {180}
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
                    <IconButton aria-label={`info about ${tile.title}`} className={classes.icon} >
                      <a href={tile.link}>
                          <InfoIcon id="navtxt3"/>
                      </a>
                    </IconButton>
                  }
                />
              </GridListTile>
              
            ))}
            
          </GridList>
    </React.Fragment>
  );
}

Grid.propTypes = {
  tileData: PropTypes.array,
};