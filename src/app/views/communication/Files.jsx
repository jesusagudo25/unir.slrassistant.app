import { List, Stack } from '@mui/material';
import { Box, styled } from '@mui/material';
import { Breadcrumb } from 'app/theme';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import { Tab, Tabs } from '@mui/material';
import { useState } from 'react';
import { Grid } from '@mui/material';

import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

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


export default function Files() {
    return (
        <Container>
            <Box className="breadcrumb">
                <Breadcrumb routeSegments={[{ name: 'Projects', path: '/projects' }, { name: 'Files' }]} />
            </Box>

            <Card elevation={3} sx={{ pt: '20px', mb: 3 }}>
                <CardHeader>
                    <Title>Files</Title>
                    <Button variant="contained" component="label" startIcon={<AddIcon />}>
                                Upload File
                                <input type="file" hidden />
                            </Button>
                </CardHeader>
                <Divider />
                <Box overflow="auto" sx={{ p: 3 }}>
                    <ul>
                        <li>Protocol</li>
                        <li>Search Strategy</li>
                        <li>Selection Criteria</li>
                        <li>Selection Results</li>
                        <li>Extraction Form</li>
                        <li>Extraction Results</li>
                        <li>Quality Assessment</li>
                        <li>Quality Assessment Results</li>
                        <li>Report</li>
                        <li>Report Results</li>
                    </ul>
                </Box>
            </Card>


        </Container>
    )
}
