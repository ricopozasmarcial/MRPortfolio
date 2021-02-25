import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 0),
    position: "fixed",
    left: "0",
    bottom: "0",
    right: "0",
    height: "70px",
    width: "100%",
    lineHeight: "60px",
  },
  phantom:{
    display: 'block',
    padding: '20px',
    height: '60px',
    width: '100%',
  }
}));

export default function Footer(props) {
  const classes = useStyles();
  const { description, title } = props;

  return (
    <div className={classes.phantom}>
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          {title}
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          {description}
        </Typography>
      </Container>
    </footer>
    </div>
  );
}

Footer.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
};
