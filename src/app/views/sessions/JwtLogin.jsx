import { LoadingButton } from '@mui/lab';
import axios from 'axios';
import { Card, Grid, TextField } from '@mui/material';
import { Box, styled, useTheme } from '@mui/material';
import { H4, Paragraph } from 'app/theme/Typography';
import { Alert, Button, Snackbar } from '@mui/material';
import { Formik } from 'formik';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

const FlexBox = styled(Box)(() => ({ display: 'flex', alignItems: 'center' }));

const JustifyBox = styled(FlexBox)(() => ({ justifyContent: 'center' }));

const ContentBox = styled(Box)(() => ({
  height: '100%',
  padding: '32px',
  position: 'relative',
  background: 'rgba(0, 0, 0, 0.01)'
}));

const ContentRoot = styled('div')(({ theme }) => ({
  '& .icon': { fontSize: 20 },
  '& .success': { backgroundColor: theme.palette.success.main },
  '& .error': { backgroundColor: theme.palette.error.main },
  '& .info': { backgroundColor: theme.palette.primary.main },
  '& .iconVariant': { opacity: 0.9, marginRight: theme.spacing(1) },
  '& .message': { display: 'flex', alignItems: 'center' },
  '& .margin': { margin: theme.spacing(1) }
}));

const JWTRoot = styled(JustifyBox)(() => ({
  background: '#1A2038',
  minHeight: '100% !important',
  '& .card': {
    maxWidth: 800,
    minHeight: 400,
    margin: '1rem',
    display: 'flex',
    borderRadius: 12,
    alignItems: 'center'
  }
}));

// inital login credentials
const initialValues = {
  email: '',
  password: '',
};

// form field validation schema
const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, 'Password must be 6 character length')
    .required('Password is required!'),
  email: Yup.string().email('Invalid Email address').required('Email is required!')
});

const JwtLogin = () => {
  const theme = useTheme();
  const { REACT_APP_CLOUD_GATEWAY, REACT_APP_MICRO_SECURITY } = process.env;
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  }
  const handleClose = (_, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  }
  

  const handleFormSubmit = async (values) => {
    setLoading(true);
    await axios.post(`${REACT_APP_CLOUD_GATEWAY}${REACT_APP_MICRO_SECURITY}/auth/login`, values)
      .then((res) => {
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('id', res.data.id);
        localStorage.setItem('name', res.data.name);
        localStorage.setItem('email', res.data.email);

        navigate('/dashboard/app', { replace: true });
        setLoading(false);

      }).catch((err) => {
        console.log(err);
        setLoading(false);
        handleClick();
      });

  };

  return (
    <JWTRoot>
      <Card className="card">
        <Grid container>
          <Grid item sm={6} xs={12}>
            <JustifyBox p={4} height="100%" sx={{ minWidth: 320 }}>
              <img src="/assets/images/illustrations/dreamer.svg" width="100%" alt="" />
            </JustifyBox>
          </Grid>

          <Grid item sm={6} xs={12}>
            <ContentBox>
              <H4 color="primary.main" fontWeight="normal" sx={{ mb: 3 }}>
                Login
              </H4>
              <Formik
                onSubmit={handleFormSubmit}
                initialValues={initialValues}
                validationSchema={validationSchema}
              >
                {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                  <form onSubmit={handleSubmit}>
                    <TextField
                      fullWidth
                      size="small"
                      type="email"
                      name="email"
                      label="Email"
                      variant="outlined"
                      onBlur={handleBlur}
                      value={values.email}
                      onChange={handleChange}
                      helperText={touched.email && errors.email}
                      error={Boolean(errors.email && touched.email)}
                      sx={{ mb: 3 }}
                    />

                    <TextField
                      fullWidth
                      size="small"
                      name="password"
                      type="password"
                      label="Password"
                      variant="outlined"
                      onBlur={handleBlur}
                      value={values.password}
                      onChange={handleChange}
                      helperText={touched.password && errors.password}
                      error={Boolean(errors.password && touched.password)}
                      sx={{ mb: 1.5 }}
                    />

                    <FlexBox justifyContent="flex-end" alignItems="center">

                      <NavLink
                        to="/forgot-password"
                        style={{ color: theme.palette.primary.main }}
                      >
                        Forgot password?
                      </NavLink>
                    </FlexBox>

                    <LoadingButton
                      type="submit"
                      color="primary"
                      loading={loading}
                      variant="contained"
                      sx={{ my: 2 }}
                    >
                      Login
                    </LoadingButton>

                    <Paragraph>
                      Don't have an account?
                      <NavLink
                        to="/sign-up"
                        style={{ color: theme.palette.primary.main, marginLeft: 5 }}
                      >
                        Register
                      </NavLink>
                    </Paragraph>
                  </form>
                )}
              </Formik>
            </ContentBox>
          </Grid>
        </Grid>
      </Card>

      <ContentRoot>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        ContentProps={{ "aria-describedby": "message-id" }}
      >
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }} variant="filled">
          Invalid email or password!
        </Alert>
      </Snackbar>
    </ContentRoot>
    </JWTRoot>
  );
};

export default JwtLogin;
