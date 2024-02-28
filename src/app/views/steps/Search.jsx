import { Stack } from '@mui/material';
import { Box, styled } from '@mui/material';
import { Breadcrumb } from 'app/theme';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import { Tab, Tabs } from '@mui/material';
import { useState } from 'react';
import { Grid } from '@mui/material';
import TopSellingTable from '../dashboard/shared/TopSellingTable';

import Manually from 'app/components/steps/conducting/Manually';
import Bibtext from 'app/components/steps/conducting/Bibtext';
import StatResearchCards from './shared/StatResearchCards';
import Automatic from 'app/components/steps/conducting/Automatic';
import { H5 } from 'app/theme/Typography';
import { Divider } from '@mui/material';

const Container = styled('div')(({ theme }) => ({
    margin: '30px',
    [theme.breakpoints.down('sm')]: { margin: '16px' },
    '& .breadcrumb': {
        marginBottom: '30px',
        [theme.breakpoints.down('sm')]: { marginBottom: '16px' }
    }
}));

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function Search() {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Container>
            <Box className="breadcrumb">
                <Breadcrumb routeSegments={[{ name: 'Projects', path: '/projects' }, { name: 'Search' }]} />
            </Box>

            <Stack spacing={3}>
            <Automatic />

            </Stack>

            <Divider sx={{ my: 3 }} />

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
