import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "lightgrey",
    padding: theme.spacing(2, 0),
    position: "initial",
    left: "0",
    bottom: "0",
    right: "0",
    height: "50px",
    width: "auto",
    lineHeight: "30px",
    opacity: "70%",
  }
}));

export default function Footer(props) {
  const classes = useStyles();
  return (
   
    <footer className={classes.footer} id="footer">
      <Container maxWidth="lg">
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p" id="navtxt">
            Created with React by Marcial Rico Pozas 
        </Typography>
      </Container>
    </footer>
   
  );
}

Footer.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
};
