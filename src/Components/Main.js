import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import SchoolIcon from '@material-ui/icons/School';
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
              <Paper className={classes.paper} id="sidebar"><img src = 'Aptitudes/Java.png' id="aptitude" alt=""></img><p id="navtxt">Java</p></Paper>
            </Grid>
            <Grid item xs={4} >
              <Paper className={classes.paper} id="sidebar"><img src = 'Aptitudes/JS.png' id="aptitude" alt=""></img><p id="navtxt">JavaScript</p></Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper} id="sidebar"><img src = 'Aptitudes/SQL.png' id="aptitude" alt=""></img><p id="navtxt">SQL</p></Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper} id="sidebar"><img src = 'Aptitudes/REACT.png' id="aptitude" alt=""></img><p id="navtxt">ReactJS</p></Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper} id="sidebar"><img src = 'Aptitudes/UE.png' id="aptitude" alt=""></img><p id="navtxt">Unreal Engine 4</p></Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper} id="sidebar"><img src = 'Aptitudes/UNITY.png' id="aptitude" alt=""></img><p id="navtxt">Unity Engine</p></Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper} id="sidebar"><img src = 'Aptitudes/VUFORIA.png' id="aptitude" alt=""></img><p id="navtxt">Vuforia</p></Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper} id="sidebar"><img src = 'Aptitudes/SCRUM.png' id="aptitude" alt=""></img><p id="navtxt">Scrum & Agile</p></Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper} id="sidebar"><img src = 'Aptitudes/C.png' id="aptitude" alt=""></img><p id="navtxt">C# .NET</p></Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper} id="sidebar"><img src = 'Aptitudes/SPRINGBOOT.png' id="aptitude" alt=""></img><p id="navtxt">SpringBoot</p></Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper} id="sidebar"><img src = 'Aptitudes/OFFICE.png' id="aptitude" alt=""></img><p id="navtxt">Microsoft Office</p></Paper>
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
                  <img src= 'Aptitudes/italy.svg' alt=""></img> 
               </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Italian" secondary="Advanced Level" id="navtxt" />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <img src= 'Aptitudes/uk.svg' alt=""></img> 
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="English" secondary="Advanced Level"  />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <img src= 'Aptitudes/spain.svg' alt=""></img> 
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Spanish" secondary="Native Language" />
            </ListItem>
          </List>
        <Typography variant="h6" gutterBottom>
          Education
        </Typography>
        <Divider/>
        <List>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <SchoolIcon/>
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="University of Oviedo" secondary="2017 - current. Software Engineering Degree" id="navtxt" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <SchoolIcon/>
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Colegio Salesianos Santo Angel" secondary="2016 - 2017. High School" id="navtxt" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <SchoolIcon/>
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Liceo Cervantes" secondary="2015 - 2016. High School." id="navtxt" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <SchoolIcon/>
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Liceo Cervantes" secondary="2012 - 2015. Compulsory Secondary Education"  />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <SchoolIcon/> 
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Colegio Salesianos Santo Angel" secondary="2011 - 2012. Compulsory Secondary Education" />
          </ListItem>
        </List>
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
