import { Stack } from '@mui/material';
import { Box, styled } from '@mui/material';
import { Breadcrumb } from 'app/theme';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import { Tab, Tabs } from '@mui/material';
import { useState } from 'react';
import SearchMethods from 'app/components/steps/general/SearchMethods';
import Source from 'app/components/steps/general/Source';
import SelectionCriteria from 'app/components/steps/general/SelectionCriteria';
import SelectionProcedures from 'app/components/steps/general/SelectionProcedures';
import QualityCriteria from 'app/components/steps/general/QualityCriteria';

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

export default function ReviewProtocol() {

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

  return (
    <Container>
    <Box className="breadcrumb">
        <Breadcrumb routeSegments={[{ name: 'Projects', path: '/projects' }, { name: 'Review Protocol' }]} />
    </Box>

    <Stack spacing={3}>
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="General Tabs" >
                    <Tab label="Search String" {...a11yProps(0)} />
                    <Tab label="Source list" {...a11yProps(1)} />
                    <Tab label="Selection criteria" {...a11yProps(2)} />
                    <Tab label="Quality criteria" {...a11yProps(3)} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <SearchMethods />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <Source />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                <SelectionCriteria />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
                <QualityCriteria />
            </CustomTabPanel>
        </Box>

    </Stack>
</Container>
  )
}
