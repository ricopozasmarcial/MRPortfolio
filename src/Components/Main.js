import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Language';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 10,
    marginBottom: 10,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },
}));

export default function Main(props) {
  const { title, content, xs, md, isAptitude} = props;
  const classes = useStyles();
  if(isAptitude){
    return (
      <Grid item xs={12} md={8}>
         <Typography variant="h6" gutterBottom>
          Skills
        </Typography>
        <Divider/>
        <div className={classes.root}>
          <Grid container spacing={2} >
            <Grid item xs={4}>
              <Paper className={classes.paper} id="sidebar"><img src = 'JAVA.png' id="aptitude"></img><p id="navtxt">Java</p></Paper>
            </Grid>
            <Grid item xs={4} >
              <Paper className={classes.paper} id="sidebar"><img src = 'JS.png' id="aptitude"></img><p id="navtxt">JavaScript</p></Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper} id="sidebar"><img src = 'SQL.png' id="aptitude"></img><p id="navtxt">SQL</p></Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper} id="sidebar"><img src = 'REACT.png' id="aptitude"></img><p id="navtxt">ReactJS</p></Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper} id="sidebar"><img src = 'UE.png' id="aptitude"></img><p id="navtxt">Unreal Engine 4</p></Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper} id="sidebar"><img src = 'UNITY.png' id="aptitude"></img><p id="navtxt">Unity Engine</p></Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper} id="sidebar"><img src = 'VUFORIA.png' id="aptitude"></img><p id="navtxt">Vuforia</p></Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper} id="sidebar"><img src = 'SCRUM.png' id="aptitude"></img><p id="navtxt">Scrum & Agile</p></Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper} id="sidebar"><img src = 'C.png' id="aptitude"></img><p id="navtxt">C# .NET</p></Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper} id="sidebar"><img src = 'SPRINGBOOT.png' id="aptitude"></img><p id="navtxt">SpringBoot</p></Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper} id="sidebar"><img src = 'OFFICE.png' id="aptitude"></img><p id="navtxt">Microsoft Office</p></Paper>
            </Grid>
          </Grid>
        </div>
        <Typography variant="h6" gutterBottom>
          Languages
        </Typography>
        <Divider/>
          <List>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <ImageIcon />
               </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Italian" secondary="Advanced Level" id="navtxt" />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <ImageIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="English" secondary="Advanced Level"  />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <ImageIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Spanish" secondary="Native Language" />
            </ListItem>
          </List>
        <Typography variant="h6" gutterBottom>
          Education
        </Typography>
        <Divider/>
      </Grid>
    );
  }

  return (
    <Grid item xs={xs} md={md}>
      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>
      <Divider/>
        <p>{content.content}</p>  
    </Grid>
  );
}

Main.propTypes = {
  posts: PropTypes.array,
  title: PropTypes.string,
};
