import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import HomeIcon from '@material-ui/icons/Home';
import AboutMeIcon from '@material-ui/icons/Person';
import ProjectsIcon from '@material-ui/icons/Archive';
import AptitudesIcon from '@material-ui/icons/Book';
import MenuIcon from '@material-ui/icons/Menu';
import Collapse from '@material-ui/core/Collapse';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-around',
    overflowX: 'hidden',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
  root: {
    height: 180,
  },
  container: {
    display: 'flex',
  },
  paper: {
    margin: theme.spacing(1),
  },
  svg: {
    width: 100,
    height: 100,
  },
  polygon: {
    fill: theme.palette.common.white,
    stroke: theme.palette.divider,
    strokeWidth: 1,
  },
}));

const sections = [
  { title: 'Home', url: '/MRPortfolio/#/Welcome' , icon: <HomeIcon id="icon"/> },
  { title: 'About me', url: '/MRPortfolio/#/AboutMe' , icon: <AboutMeIcon id="icon"/> },
  { title: 'Projects', url: '/MRPortfolio/#/Projects' , icon: <ProjectsIcon id="icon"/> },
  { title: 'Aptitudes', url: '/MRPortfolio/#/Aptitudes' , icon: <AptitudesIcon id="icon"/> },
];

export default function Header(props) {

  const classes = useStyles();
  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
         React Portfolio
        </Typography>
      </Toolbar>
      <Toolbar component="nav"  className={classes.toolbarSecondary}>
        {sections.map((section) => (     
          <Button
            key={section.title}
            href={section.url}
            className={classes.toolbarLink}
            endIcon={section.icon}
          >
            <a id="navtxt">{section.title}</a>
          </Button>    
        ))}
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};
