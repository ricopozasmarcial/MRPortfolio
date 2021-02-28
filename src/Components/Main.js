import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

export default function Main(props) {
  const { title, content, xs, md, moreContent } = props;

  return (
    <Grid item xs={xs} md={md}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Divider />
        {content.content}
    </Grid>
  );
}

Main.propTypes = {
  posts: PropTypes.array,
  title: PropTypes.string,
};
