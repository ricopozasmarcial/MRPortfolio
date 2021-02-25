import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import HomeIcon from '@material-ui/icons/Home';
import AboutMeIcon from '@material-ui/icons/Person';
import ProjectsIcon from '@material-ui/icons/Archive';
import AptitudesIcon from '@material-ui/icons/Book';
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
}));

const sections = [
  { title: 'Home', url: '/MRPortfolio/#/Welcome' , icon: <HomeIcon/> },
  { title: 'About me', url: '/MRPortfolio/#/AboutMe' , icon: <AboutMeIcon/> },
  { title: 'Projects', url: '/MRPortfolio/#/Projects' , icon: <ProjectsIcon/> },
  { title: 'Aptitudes', url: '/MRPortfolio/#/Aptitudes' , icon: <AptitudesIcon/> },
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
            variant="outlined"
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
