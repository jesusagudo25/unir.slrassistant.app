import { Box, Card, Grid, Icon, IconButton, styled, Tooltip, Typography } from '@mui/material';
import { Small } from 'app/theme/Typography';

const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
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
    { name: 'New Leads', amount: 3050, icon: 'group' },
    { name: 'This week Sales', amount: '$80,500', icon: 'attach_money' },
    { name: 'Inventory Status', amount: '8.5% Stock Surplus', icon: 'store' },
    { name: 'Orders to deliver', amount: '305 Orders', icon: 'shopping_cart' },
    { name: 'Orders to deliver', amount: '305 Orders', icon: 'shopping_cart' },
  ];

  return (
    <Grid container spacing={3} sx={{ mb: '24px' }}>
      {cardList.map((item, index) => (
        <Grid item xs={8} md={12} key={index}>
          <StyledCard elevation={6}>
            <ContentBox>
              <Icon className="icon" style={{  opacity: 0.6, fontSize: '44px', color: '#1976d2' }}> {item.icon}</Icon>
              <Box ml="12px">
                <Heading>{item.amount}</Heading>
                <Small>{item.name}</Small>
                <Box mt="4px" display="flex" alignItems="center" gap="5px">
                  <Box display="flex" alignItems="center" gap="5px">
                    <span style={{  borderRadius: '100%', width: '10px', height: '10px', backgroundColor: '#1976d2', display: 'inline-block', marginRight: '4px' }}></span>
                    <Typography variant="caption" component="span" color="text.secondary">
                      Category 1
                    </Typography>
                  </Box>
                  <Box display="flex" alignItems="center" gap="5px">
                    <Icon className="icon" style={{  opacity: 0.6, fontSize: '18px', color: '#1976d2' }}> star</Icon>
                    <Typography variant="caption" component="span" color="text.secondary">
                      23.4k
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
