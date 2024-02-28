import { Box, Card, Grid, Icon, IconButton, styled, Tooltip, Typography } from '@mui/material';
import { Small } from 'app/theme/Typography';

const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'nowrap',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '24px !important',
  background: theme.palette.background.paper,
  [theme.breakpoints.down('sm')]: { padding: '16px !important' },
}));

const ContentBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  '& small': { color: theme.palette.text.secondary },
}));

const Heading = styled('h6')(({ theme }) => ({
  margin: 0,
  marginTop: '4px',
  fontSize: '14px',
  fontWeight: '500',
  color: theme.palette.primary.main,
}));

const StatCards = () => {
  const cardList = [
    { name: 'Software Engineering', amount: 'An SLR-tool: search process in practice: a tool to conduct and manage systematic literature review (SLR)', keywords: 'SLR, SLR-tool, search process, systematic literature review', icon: 'group' },
    { name: 'Software Engineering', amount: 'Identification and prioritization of SLR search tool requirements: an SLR and a survey', keywords: 'SLR, identification, prioritization, search tool, requirements', icon: 'group' },
    { name: 'Cleaner Production', amount: 'Carbon accounting: a systematic literature review', keywords: 'Carbon accounting, systematic literature review', icon: 'group' },
    { name: 'System and Software', amount: 'Software ecosystems – A systematic literature review', keywords: 'Software ecosystems, systematic literature review', icon: 'group' },
    { name: 'Software Engineering', amount: 'A Systematic Literature Review of Software Defect Prediction:Research Trends, Datasets, Methods and Frameworks', keywords: 'Software Defect Prediction, Research Trends, Datasets, Methods, Frameworks', icon: 'group' },
  ];

  return (
    <Grid container spacing={3} sx={{ mb: '24px' }}>
      {cardList.map((item, index) => (
        <Grid item xs={8} md={12} key={index}>
          <StyledCard elevation={6}>
            <ContentBox>

              <Box >
                <Heading>{item.amount}</Heading>
                <Small>{item.name}</Small>
                <Box mt="4px" display="flex" alignItems="center" gap="5px">
                  <Box display="flex" alignItems="center" gap="5px">
                    <span style={{ borderRadius: '100%', width: '10px', height: '10px', backgroundColor: '#1976d2', display: 'inline-block', marginRight: '4px' }}></span>
                    <Typography variant="caption" component="span" color="text.secondary">
                      {item.keywords}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </ContentBox>

            <Tooltip title="View Details" placement="top">
              <IconButton>
                <Icon>arrow_right_alt</Icon>
              </IconButton>
            </Tooltip>
          </StyledCard>
        </Grid>
      ))}
    </Grid>
  );
};

export default StatCards;
