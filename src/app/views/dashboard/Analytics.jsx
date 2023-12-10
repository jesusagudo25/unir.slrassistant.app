import { Grid, styled } from '@mui/material';
import { Fragment } from 'react';
import RepositoryCards from './shared/RepositoryCards';

import DeployCard from './shared/DeployCard';
import ContributeCard from './shared/ContributeCard';

const ContentBox = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
}));

const H4 = styled('h4')(({ theme }) => ({
  fontSize: '1rem',
  fontWeight: '500',
  marginBottom: '16px',
  textTransform: 'capitalize',
  color: theme.palette.text.secondary,
}));

const Analytics = () => {

  return (
    <Fragment>
      <ContentBox className="analytics">
        <Grid container spacing={3}>
          <Grid item lg={8} md={8} sm={12} xs={12}>
            <H4>Top 5 Repositories</H4>
            <RepositoryCards />
          </Grid>

          <Grid item lg={4} md={4} sm={12} xs={12}>
            <H4>Community</H4>
            <DeployCard />
            <ContributeCard />

          </Grid>
        </Grid>
      </ContentBox>
    </Fragment>
  );
};

export default Analytics;
