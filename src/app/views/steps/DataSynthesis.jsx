import { Stack } from '@mui/material';
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


export default function DataSynthesis() {
  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb routeSegments={[{ name: 'Projects', path: '/projects' }, { name: 'Data Synthesis' }]} />
      </Box>

      <Card elevation={3} sx={{ pt: '20px', mb: 3 }}>
      <CardHeader>
        <Title>Data Synthesis</Title>
      </CardHeader>
      <Box overflow="auto">
        Hola
        </Box>
      </Card>

    </Container>
  )
}
