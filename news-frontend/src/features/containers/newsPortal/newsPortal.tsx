import { Container, Grid } from '@mui/material';
import React from 'react';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import NewsList from '../NewsList/NewsList';


const NewsPortal = () => {

  return (
      <Container>
        <Grid  container direction="column" spacing={2}>
          <Grid item container justifyContent="space-between" alignItems="center">
            <Grid item>
              <Typography variant="h5">
                Posts
              </Typography>
            </Grid>
            <Grid item>
              <NavLink to="/new-post">
                Add new post
              </NavLink>
            </Grid>
          </Grid>
        </Grid>
        <NewsList/>
      </Container>
  );
};

export default NewsPortal;