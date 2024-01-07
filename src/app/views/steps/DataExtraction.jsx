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

export default function DataExtraction() {
    return (
        <Container>
            <Box className="breadcrumb">
                <Breadcrumb routeSegments={[{ name: 'Projects', path: '/projects' }, { name: 'Data Extraction' }]} />
            </Box>

            <Stack spacing={3} sx={{ mb: 3 }}>
                <H5 >Statistics for the data extraction</H5>
                <StatResearchCards cardList={[{ name: 'Total', amount: '0', icon: 'list' }]} />
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
