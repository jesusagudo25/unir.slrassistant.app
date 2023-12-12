import { Stack } from '@mui/material';
import { Box, styled } from '@mui/material';
import { Breadcrumb, SimpleCard } from 'app/components';
import NewProjectForm from 'app/components/ProjectForm/NewProjectForm';

const Container = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
  '& .breadcrumb': {
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: { marginBottom: '16px' }
  }
}));

const NewProjectPage = () => {
   
    return (
        <Container>
        <Box className="breadcrumb">
          <Breadcrumb routeSegments={[{ name: 'Projects', path: '/projects' }, { name: 'New Project' }]} />
        </Box>
  
        <Stack spacing={3}>
          <SimpleCard title="Create New Project">
            <NewProjectForm />
          </SimpleCard>
  
        </Stack>
      </Container>
    )
}

export default NewProjectPage