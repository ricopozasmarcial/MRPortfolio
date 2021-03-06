import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  sidebarAboutBox: {
    padding: theme.spacing(2),
    boxShadow: ' 3px 3px 3px  rgba(0,0,0,0.2)',
  },
}));

export default function Sidebar(props) {
  const classes = useStyles();
  const {social, title } = props;

  return (
    <Grid item xs={12} md={4}>
      <Paper elevation={0} className={classes.sidebarAboutBox} id="sidebar">
        <Typography variant="h6" gutterBottom id="navtxt">
          {title}
        </Typography>
        {social.map((network) => (
        <Link display="block" variant="body1" href={network.link} download key={network.name} id="navtxt">
          <Grid container direction="row" spacing={1} alignItems="center">
            <Grid item>
              <network.icon />
            </Grid>
            <Grid item>{network.name}</Grid>
          </Grid>
        </Link>
      ))}
      </Paper>
    </Grid>
  );
}

Sidebar.propTypes = {
  description: PropTypes.string,
  social: PropTypes.array,
  title: PropTypes.string,
};
