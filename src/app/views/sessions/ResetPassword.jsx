import axios from 'axios';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Icon, IconButton, InputAdornment, styled, TextField,Box, Grid, Card } from '@mui/material';
import { LoadingButton } from '@mui/lab';

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
  
  const ResetPasswordRoot = styled(JustifyBox)(() => ({
    background: '#1A2038',
    minHeight: '100vh !important',
    '& .card': {
      maxWidth: 800,
      margin: '1rem',
      borderRadius: 12,
    },
  }));

export default function ResetPassword() {

    const { pathname } = useLocation();

    const navigate = useNavigate();

    const [errors, setErrors] = useState({
        password: '',
        passwordConfirm: '',
    });

    const [resetPassword, setResetPassword] = useState({
        password: '',
        passwordConfirm: '',
    });

    const { REACT_APP_CLOUD_GATEWAY, REACT_APP_MICRO_SECURITY } = process.env;

    const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

    const [showPassword, setShowPassword] = useState(false);

    const [isLoading, setIsLoading] = useState(false);


    const handleFormSubmit = (event) => {
        event.preventDefault();
        setIsLoading(true);

        if (resetPassword.password === '' && resetPassword.passwordConfirm === '') {
            setErrors({ password: 'Please enter your password', passwordConfirm: 'Please enter your password' });
            setIsLoading(false);
            return;
        }

        if (resetPassword.password === '') {
            setErrors({ password: 'Please enter your password' });
            setIsLoading(false);
            return;
        }

        if (resetPassword.passwordConfirm === '') {
            setErrors({ passwordConfirm: 'Please enter your password' });
            setIsLoading(false);
            return;
        }

        if (resetPassword.password !== resetPassword.passwordConfirm) {
            setErrors({ passwordConfirm: 'Password does not match' });
            setIsLoading(false);
            return;
        }

        console.log(resetPassword);
        const token = pathname.split('/')[2];

        axios.patch(`${REACT_APP_CLOUD_GATEWAY}${REACT_APP_MICRO_SECURITY}/auth/reset-password`, {
            token,
            password: resetPassword.password,
            passwordConfirm: resetPassword.passwordConfirm,
        })
            .then((response) => {
                console.log(response.data);
                setIsLoading(false);
                localStorage.setItem('resetPassword', true)
                navigate('/sign-in');
                setResetPassword({
                    password: '',
                    passwordConfirm: '',
                });
                
            })
            .catch((error) => {
                console.log(error);
                setIsLoading(false);
                setResetPassword({
                    password: '',
                    passwordConfirm: '',
                });

                setErrors({});
            });

    };

    return (
        <ResetPasswordRoot>
            <Card className="card">
                <Grid container>
                    <Grid item xs={12}>
                        <JustifyBox p={4}>
                            <img width="300" src="/assets/images/illustrations/Designer.svg" alt="" />
                        </JustifyBox>

                        <ContentBox>
                            <form onSubmit={handleFormSubmit}>
                                <TextField
                                    name="password"
                                    label="Contraseña"
                                    type={showPassword ? 'text' : 'password'}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton onClick={() => setShowPassword((prev) => !prev)}>
                                                    {showPassword ? <Icon>visibility</Icon> : <Icon>visibility_off</Icon>}
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                    size="small"
                                    sx={{ mb: 3, width: '100%' }}
                                    error={Boolean(errors.password)}
                                    helperText={errors.password ? errors.password : ''}
                                    value={resetPassword.password}
                                    onChange={(e) => setResetPassword({ ...resetPassword, password: e.target.value })}
                                />

                                <TextField
                                    name="passwordConfirm"
                                    label="Confirmar contraseña"
                                    type={showPasswordConfirm ? 'text' : 'password'}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton onClick={() => setShowPasswordConfirm((prev) => !prev)}>
                                                    {showPasswordConfirm ? <Icon>visibility</Icon> : <Icon>visibility_off</Icon>}
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                    size="small"
                                    sx={{ mb: 3, width: '100%' }}
                                    error={Boolean(errors.passwordConfirm)}
                                    helperText={errors.passwordConfirm ? errors.passwordConfirm : ''}
                                    value={resetPassword.passwordConfirm}
                                    onChange={(e) => setResetPassword({ ...resetPassword, passwordConfirm: e.target.value })}
                                />

                                <LoadingButton
                                    fullWidth
                                    color="primary"
                                    loading={isLoading}
                                    variant="contained"
                                    sx={{ mb: 2 }}
                                    type="submit"
                                >
                                    Change Password
                                </LoadingButton>
                            </form>
                        </ContentBox>
                    </Grid>
                </Grid>
            </Card>
        </ResetPasswordRoot>


    )
}
