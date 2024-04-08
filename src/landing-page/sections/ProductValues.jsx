import * as React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';

const item = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};
/* 
SLR-TOOL: SYSTEMATIC LITERATURE REVIEW TOOL

*/

function ProductValues() {
  return (
    <Box
      component="section"
      sx={{ display: 'flex', overflow: 'hidden', bgcolor: 'secondary.light' }}
    >
      <Container sx={{ mt: 15, mb: 30, display: 'flex', position: 'relative' }}>
        <Box
          component="img"
          src="/assets/images/landing-page/productCurvyLines.png"
          alt="curvy lines"
          sx={{ pointerEvents: 'none', position: 'absolute', top: -180 }}
        />
        <Grid container spacing={3}>
          <Grid item xs={12} md={3}>
            <Box sx={item}>
              <Box
                component="img"
                src="/assets/images/landing-page/search.svg"
                alt="suitcase"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                Automated searches
              </Typography>
              <Typography variant="h5">
                {
                  'Search for articles from multiple sources with a single click.'
                }
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box sx={item}>
              <Box
                component="img"
                src="/assets/images/landing-page/group.svg"
                alt="graph"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                Collaboration
              </Typography>
              <Typography variant="h5">
                {'Collaborate with your team to conduct SLR.'}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box sx={item}>
              <Box
                component="img"
                src="/assets/images/landing-page/trace.svg"
                alt="clock"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                Traceability
              </Typography>
              <Typography variant="h5">
                {'Trace the SLR process from start to finish.'}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box sx={item}>
              <Box
                component="img"
                src="/assets/images/landing-page/report.svg"
                alt="clock"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                Report generation
              </Typography>
              <Typography variant="h5">
                {'Automated report generation for SLR process.'}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ProductValues;
