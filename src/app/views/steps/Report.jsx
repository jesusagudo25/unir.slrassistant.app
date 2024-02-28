import { Checkbox, FormControlLabel, FormGroup, Stack } from '@mui/material';
import { Box, styled } from '@mui/material';
import { Breadcrumb } from 'app/theme';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import { Tab, Tabs } from '@mui/material';
import { useState } from 'react';
import { Grid } from '@mui/material';
import TopSellingTable from '../dashboard/shared/TopSellingTable';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import StatResearchCards from './shared/StatResearchCards';
import { H5 } from 'app/theme/Typography';
import { Divider } from '@mui/material';
import Card from '@mui/material/Card';



const Container = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
  '& .breadcrumb': {
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: { marginBottom: '16px' }
  }
}));

const Title = styled('span')(() => ({
  fontSize: '1rem',
  fontWeight: '500',
  textTransform: 'capitalize',
}));

const CardHeader = styled(Box)(() => ({
  display: 'flex',
  paddingLeft: '24px',
  paddingRight: '24px',
  marginBottom: '12px',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

export default function Report() {
  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb routeSegments={[{ name: 'Projects', path: '/projects' }, { name: 'Download Report' }]} />
      </Box>

      <Card elevation={3} sx={{ pt: '20px', mb: 3 }}>
        <CardHeader>
          <Title>Download Report</Title>
        </CardHeader>
        <Box overflow="auto" p={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom>
                Review
              </Typography>
              <FormGroup row>
                <FormControlLabel control={<Checkbox />} label="Name" />
                <FormControlLabel control={<Checkbox />} label="Keywords" />
                <FormControlLabel control={<Checkbox />} label="Description" />
                <FormControlLabel control={<Checkbox />} label="Authors" />
                <FormControlLabel control={<Checkbox />} label="Date" />
              </FormGroup>
            </Grid>
          </Grid>
          <Grid container spacing={3} mt={1}>
            <Grid item xs={12} md={9}>
              <Typography variant="h6" gutterBottom>
                Planning
              </Typography>
              <FormGroup row>
                <FormControlLabel control={<Checkbox />} label="Objective" />
                <FormControlLabel control={<Checkbox />} label="Research question" />
                <FormControlLabel control={<Checkbox />} label="Search string" />
                <FormControlLabel control={<Checkbox />} label="Sources" />
                <FormControlLabel control={<Checkbox />} label="Selection criteria" />
                <FormControlLabel control={<Checkbox />} label="Quality criteria" />
              </FormGroup>
            </Grid>
          </Grid>
          <Grid container spacing={3} mt={1}>
            <Grid item xs={12} md={9}>
              <Typography variant="h6" gutterBottom>
                Conducting
              </Typography>
              <FormGroup row>
                <FormControlLabel control={<Checkbox />} label="Search results" />
                <FormControlLabel control={<Checkbox />} label="Quality assessment" />
                <FormControlLabel control={<Checkbox />} label="Data extraction" />
              </FormGroup>
            </Grid>
          </Grid>
          <Divider sx={{ mt: 3, mb: 3 }} />
          <Grid container spacing={3} mt={1}>
            <Grid item xs={12} md={9}>
            <Button variant="contained" color="primary" startIcon={<AddIcon />}>
              Download
            </Button>
            </Grid>
          </Grid>
        </Box>
      </Card>

    </Container>
  )
}
