import * as React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Button from '../components/Button';
import Typography from '../components/Typography';

const item = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};

const number = {
  fontSize: 24,
  fontFamily: 'default',
  color: 'secondary.main',
  fontWeight: 'medium',
};

const image = {
  height: 55,
  my: 4,
};

/* 
SLR-TOOL: SYSTEMATIC LITERATURE REVIEW TOOL

*/


function ProductHowItWorks() {
  return (
    <Box
      component="section"
      sx={{ display: 'flex', bgcolor: 'secondary.light', overflow: 'hidden' }}
    >
      <Container
        sx={{
          mt: 10,
          mb: 15,
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box
          component="img"
          src="/assets/images/landing-page/productCurvyLines.png"
          alt="curvy lines"
          sx={{
            pointerEvents: 'none',
            position: 'absolute',
            top: -180,
            opacity: 0.7,
          }}
        />
        <Typography variant="h4" marked="center" component="h2" sx={{ mb: 14 }}>
          Contribute 
        </Typography>
        <div>
          <Grid container spacing={3}>
            <Grid item xs={12} md={3}>
              <Box sx={item}>
                <Box sx={number}>1.</Box>
                <Box
                  component="img"
                  src="/assets/images/landing-page/repo.svg"
                  alt="suitcase"
                  sx={image}
                />
                <Typography variant="h5" align="center">
                Visit our repository on GitHub.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
              <Box sx={item}>
                <Box sx={number}>2.</Box>
                <Box
                  component="img"
                  src="/assets/images/landing-page/fork.svg"
                  alt="graph"
                  sx={image}
                />
                <Typography variant="h5" align="center">
                  Fork the project to your GitHub account.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
              <Box sx={item}>
                <Box sx={number}>3.</Box>
                <Box
                  component="img"
                  src="/assets/images/landing-page/changes.svg"
                  alt="clock"
                  sx={image}
                />
                <Typography variant="h5" align="center">
                  Make the neccessary changes in a new branch.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
              <Box sx={item}>
                <Box sx={number}>4.</Box>
                <Box
                  component="img"
                  src="/assets/images/landing-page/pull.svg"
                  alt="clock"
                  sx={image}
                />
                <Typography variant="h5" align="center">
                  Send a pull request for us to review your changes.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </div>
        <Button
          color="secondary"
          size="large"
          variant="contained"
          component="a"
          href="/premium-themes/onepirate/sign-up/"
          sx={{ mt: 8 }}
        >
          Get started
        </Button>
      </Container>
    </Box>
  );
}

export default ProductHowItWorks;
