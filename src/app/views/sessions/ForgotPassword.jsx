import { LoadingButton } from '@mui/lab';
import { Box, Button, Card, Grid, styled, TextField, Typography, Divider, Icon } from '@mui/material';
import { H4 } from 'app/theme/Typography';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FlexBox = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
}));

const JustifyBox = styled(FlexBox)(() => ({
  justifyContent: 'center',
}));

const ContentBox = styled(Box)(({ theme }) => ({
  padding: 32,
  background: theme.palette.background.default,
  maxWidth: 500,
}));

const ForgotPasswordRoot = styled(JustifyBox)(() => ({
  background: '#1A2038',
  minHeight: '100vh !important',
  '& .card': {
    maxWidth: 800,
    margin: '1rem',
    borderRadius: 12,
  },
}));

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [error, setError] = useState({ email: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const { REACT_APP_CLOUD_GATEWAY, REACT_APP_MICRO_SECURITY } = process.env;

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (email === '') {
      setError({ email: 'Please enter your email' });
      return;
    }
    setIsLoading(true);

    axios.post(`${REACT_APP_CLOUD_GATEWAY}${REACT_APP_MICRO_SECURITY}/auth/forgot-password`, {
      email: email,
    })
      .then((response) => {

        setEmail(email);
        setSent(true);
        setIsLoading(false);

      })
      .catch((error) => {

        setSent(false);
        setEmail('');
        setIsLoading(false);
      });

  };

  return (
    <ForgotPasswordRoot>
      <Card className="card">
        <Grid container>
          <Grid item xs={12}>
            <JustifyBox p={4}>
              <img width="250" src="/assets/images/illustrations/mobile-message.svg" alt="" />
            </JustifyBox>

            {
              sent ? (
                <ContentBox>
                  <H4 variant="h4">Revisa tu correo electrónico</H4>
                  <Divider sx={{ my: 3 }} />
                  <Typography variant="body2" sx={{ mt: 1, mb: 1 }}>Se ha enviado un correo electrónico a <strong>
                    {email}
                  </strong>. Sigue las instrucciones del correo electrónico para restablecer tu contraseña.</Typography>
                </ContentBox>
              ) : (
                <ContentBox>
                  <form onSubmit={handleFormSubmit}>
                    <TextField
                      type="email"
                      name="email"
                      size="small"
                      label="Email"
                      value={email}
                      variant="outlined"
                      onChange={(e) => setEmail(e.target.value)}
                      sx={{ mb: 3, width: '100%' }}
                      error={error.email !== ''}
                      helperText={error.email}
                    />

                    <LoadingButton
                      fullWidth
                      size="large"
                      color="primary"
                      variant="contained"
                      type="submit"
                      loading={isLoading}

                    >
                      Reset Password
                    </LoadingButton>

                    <Button
                      fullWidth
                      color="primary"
                      variant="outlined"
                      onClick={() => navigate(-1)}
                      sx={{ mt: 2 }}
                    >
                      Go Back
                    </Button>
                  </form>
                </ContentBox>
              )
            }

          </Grid>
        </Grid>
      </Card>
    </ForgotPasswordRoot>
  );
};

export default ForgotPassword;
