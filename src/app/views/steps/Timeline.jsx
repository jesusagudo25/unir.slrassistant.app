import { Stack } from '@mui/material';
import { Box, styled } from '@mui/material';
import { Breadcrumb } from 'app/theme';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import { Tab, Tabs } from '@mui/material';
import { useState } from 'react';
import { Gantt, Task, EventOption, StylingOption, ViewMode, DisplayOption } from 'gantt-task-react';
import "gantt-task-react/dist/index.css";

const Container = styled('div')(({ theme }) => ({
    margin: '30px',
    [theme.breakpoints.down('sm')]: { margin: '16px' },
    '& .breadcrumb': {
        marginBottom: '30px',
        [theme.breakpoints.down('sm')]: { marginBottom: '16px' }
    }
}));


let tasks = [
    {
        start: new Date(2020, 1, 1),
        end: new Date(2020, 1, 2),
        name: 'Idea',
        id: 'Task 0',
        type: 'task',
        progress: 45,
        isDisabled: true,
        styles: { progressColor: '#ffbb54', progressSelectedColor: '#ff9e0d' },
    },
    
];

export default function Timeline() {
    return (
        <Container>
            <Box className="breadcrumb">
                <Breadcrumb routeSegments={[{ name: 'Projects', path: '/projects' }, { name: 'General' }]} />
            </Box>

            <Stack spacing={3}>
                <Gantt
                    tasks={tasks}
                    viewMode={ViewMode.Day}
                    onDateChange={(task, start, end) => {
                        console.log(task, start, end);
                    }}
                    onProgressChange={(task, progress) => {
                        console.log(task, progress);
                    }}
                    onTasksChange={(tasks) => {
                        console.log(tasks);
                    }}
                    onDoubleClick={(task) => {
                        console.log(task);
                    }}
                    onClick={(task) => {
                        console.log(task);
                    }}
                    onViewChange={(mode) => {
                        console.log(mode);
                    }}

                    columnUnitWidth={40}
                    listCellWidth={200}
                    maxHeight={500}
                    locale={'en'}
                    dateFormat={'YYYY-MM-DD'}
                
                />
            </Stack>
        </Container>
    )
}
