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

const Container = styled('div')(({ theme }) => ({
    margin: '30px',
    [theme.breakpoints.down('sm')]: { margin: '16px' },
    '& .breadcrumb': {
        marginBottom: '30px',
        [theme.breakpoints.down('sm')]: { marginBottom: '16px' }
    }
}));

export default function QualityAssessment() {
    return (
        <Container>
            <Box className="breadcrumb">
                <Breadcrumb routeSegments={[{ name: 'Projects', path: '/projects' }, { name: 'Quality Assessment' }]} />
            </Box>

            <Stack spacing={3} sx={{ mb: 3 }}>
                <Button variant="contained" color="primary" size="medium" startIcon={<AddIcon />} sx={{ width: '30%' }}>
                    Apply assessment massivly
                </Button>

            </Stack>

            <Stack spacing={3} sx={{ mb: 3 }}>
                <H5 >Statistics for the assessment</H5>
                <StatResearchCards cardList={[{ name: 'Included', amount: '0', icon: 'check_circle' }, { name: 'Excluded', amount: '0', icon: 'cancel' }, { name: 'Undecided', amount: '0', icon: 'help' }]} />
            </Stack>

            <Stack spacing={3}>
                <Grid spacing={3}>
                    <Grid item >
                        <TopSellingTable />
                    </Grid>
                </Grid>
            </Stack>
        </Container>
    )
}
