import React from 'react'
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { Button, FormControl, FormLabel, Grid, Icon, IconButton, InputLabel, MenuItem, Select, Stack } from '@mui/material';
import { Box, styled } from '@mui/material';
import { Breadcrumb, SimpleCard } from 'app/theme';
import StatProjectCards from '../dashboard/shared/StatProjectCards';
import TopSellingTable from '../dashboard/shared/TopSellingTable';
import CloseIcon from '@mui/icons-material/Close';
import Dialog from '@mui/material/Dialog';
import MuiDialogActions from '@mui/material/DialogActions';
import MuiDialogContent from '@mui/material/DialogContent';
import MuiDialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { SelectValidator, TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { LoadingButton } from '@mui/lab';
import axios from 'axios';
import { useEffect } from 'react';
import SearchUser from 'app/components/ProjectForm/SearchUser';
import ProjectMemberTable from '../dashboard/shared/ProjectMemberTable';

const DialogTitleRoot = styled(MuiDialogTitle)(({ theme }) => ({
  margin: 0,
  padding: theme.spacing(2),
  '& .closeButton': {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  }
}));

const DialogTitle = (props) => {
  const { children, onClose } = props;
  return (
    <DialogTitleRoot disableTypography>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="Close" className="closeButton" onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitleRoot>
  );
};

const DialogContent = styled(MuiDialogContent)(({ theme }) => ({
  '&.root': { padding: theme.spacing(2) }
}));

const DialogActions = styled(MuiDialogActions)(({ theme }) => ({
  '&.root': { margin: 0, padding: theme.spacing(1) }
}));

const Container = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
  '& .breadcrumb': {
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: { marginBottom: '16px' }
  }
}));

const TextField = styled(TextValidator)(() => ({
  width: "100%",
  marginBottom: "16px",
}));

const ProjectDetails = () => {

  const { REACT_APP_CLOUD_GATEWAY, REACT_APP_MICRO_SECURITY, REACT_APP_MICRO_REVIEW } = process.env;

  /* Detect id */
  const { id } = useParams();

  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const [roles, setRoles] = useState([]);

  const [userInvite, setUserInvite] = useState({
    projectId: id,
    userId: '',
    email: '',
    role: 'ADMIN'
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setUserInvite({
      projectId: id,
      userId: '',
      email: '',
      role: 'ADMIN'
    });
  }

  const handleSubmit = async (event) => {
    setLoading(true);

    await axios.post(`${REACT_APP_CLOUD_GATEWAY}${REACT_APP_MICRO_REVIEW}/projects/members`, userInvite)
      .then((res) => {

        window.location.reload();
        setLoading(false);

      }).catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    const fetchRoles = async () => {
      await axios.get(`${REACT_APP_CLOUD_GATEWAY}${REACT_APP_MICRO_SECURITY}/users/roles`)
        .then((res) => {
          setRoles(res.data);
          console.log(res.data);
        }).catch((err) => {
          console.log(err);
        });
    }

    fetchRoles();
  }, []);


  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb routeSegments={[{ name: 'Projects', path: '/projects' }, { name: 'Project Details' }]} />
      </Box>

      <Stack spacing={3}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Stack direction="row" alignItems="center" spacing={2}>
            <Button variant="contained"
              onClick={() => handleOpen()}
            ><Icon>add</Icon> Add Collaborator</Button>
          </Stack>
          <Stack direction="row" justifyContent="flex-end" alignItems="center" spacing={2}>
            <IconButton color="inherit" sx={{ padding: '8px', borderRadius: '100%', backgroundColor: 'rgba(0,0,0,0.1)', '&:hover': { backgroundColor: 'rgba(0,0,0,0.2)' } }}>
              <Icon>star</Icon>
            </IconButton>
            <IconButton color="inherit" sx={{ padding: '8px', borderRadius: '100%', backgroundColor: 'rgba(0,0,0,0.1)', '&:hover': { backgroundColor: 'rgba(0,0,0,0.2)' } }}>
              <Icon>call_split</Icon>
            </IconButton>
          </Stack>
        </Stack>

        <Grid spacing={3}>
          <Grid item >
            <StatProjectCards />
          </Grid>
        </Grid>

        <Grid spacing={3}>
          <Grid item >
            <ProjectMemberTable />
          </Grid>
        </Grid>

      </Stack>

      <div>
          <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}
            maxWidth="sm"
            fullWidth
          >
          <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
            <DialogTitle id="customized-dialog-title" onClose={handleClose}>
              Add Collaborator
            </DialogTitle>

            <DialogContent dividers>

              <Stack sx={{ display: 'flex', alignItems: 'top', justifyContent: 'center', flexDirection: 'row', gap: '20px', width: '100%' }}>
                <FormControl variant="small" sx={{ width: '50%' }}>
                  <SearchUser userFilter={userInvite} setUserFilter={setUserInvite} />
                </FormControl>

                <FormControl sx={{ width: '50%' }}>
                  <InputLabel id="role-label">Role</InputLabel>
                  <Select
                    labelId="role-label"
                    id="role"
                    value={userInvite.role || ""}
                    label="Role"
                    onChange={(e) => setUserInvite({ ...userInvite, role: e.target.value })}
                    size="small"
                  >
                    {roles.map((role) => (
                      <MenuItem value={role}>{role}</MenuItem>
                    ))
                    }
                  </Select>
                </FormControl>
              </Stack>

            </DialogContent>

            <DialogActions>
              <Button type="submit"  color="primary" autoFocus> Invite </Button>
            </DialogActions>
            </ValidatorForm>
          </Dialog>
      </div>
    </Container>
  )
}

export default ProjectDetails