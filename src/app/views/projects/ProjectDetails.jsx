import React from 'react'
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { Button, Grid, Icon, IconButton, Stack } from '@mui/material';
import { Box, styled } from '@mui/material';
import { Breadcrumb, SimpleCard } from 'app/theme';
import StatProjectCards from '../dashboard/shared/StatProjectCards';
import TopSellingTable from '../dashboard/shared/TopSellingTable';

const Container = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
  '& .breadcrumb': {
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: { marginBottom: '16px' }
  }
}));

const ProjectDetails = () => {

    /* Detect id */
    const { id } = useParams();
    const location = useLocation();
    const navigate = useNavigate();

  return (
    <Container>
    <Box className="breadcrumb">
      <Breadcrumb routeSegments={[{ name: 'Projects', path: '/projects' }, { name: 'Project Details' }]} />
    </Box>

    <Stack spacing={3}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack direction="row" alignItems="center" spacing={2}>
          <Button variant="contained" ><Icon>add</Icon> Add Collaborator</Button>
        </Stack>
      <Stack direction="row" justifyContent="flex-end" alignItems="center" spacing={2}>
        <IconButton color="inherit" sx={{ padding: '8px', borderRadius: '100%', backgroundColor: 'rgba(0,0,0,0.1)', '&:hover': { backgroundColor: 'rgba(0,0,0,0.2)' } }}>
          <Icon>star</Icon>
        </IconButton>
        <IconButton  color="inherit" sx={{ padding: '8px', borderRadius: '100%', backgroundColor: 'rgba(0,0,0,0.1)', '&:hover': { backgroundColor: 'rgba(0,0,0,0.2)' } }}>
          <Icon>call_split</Icon>
        </IconButton>
      </Stack>
      </Stack>

      <Grid  spacing={3}>
        <Grid item >
          <StatProjectCards />
        </Grid>
      </Grid>

      <Grid  spacing={3}>
        <Grid item >
          <TopSellingTable />
          </Grid>
      </Grid>

    </Stack>
  </Container>
  )
}

export default ProjectDetails