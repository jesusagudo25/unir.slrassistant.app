import React from 'react'

import { Box, Card, Grid, Icon, IconButton, styled, Tooltip } from '@mui/material';
import { Small } from 'app/theme/Typography';
import Stack from '@mui/material/Stack';

const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '24px !important',
  background: theme.palette.background.paper,
  [theme.breakpoints.down('sm')]: { padding: '16px !important' },
  width: '100%',
}));

const ContentBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  '& small': { color: theme.palette.text.secondary },
  '& .icon': { opacity: 0.6, fontSize: '44px', color: theme.palette.primary.main },
}));

const Heading = styled('h6')(({ theme }) => ({
  margin: 0,
  marginTop: '4px',
  fontSize: '14px',
  fontWeight: '500',
  color: theme.palette.primary.main,
}));

const StatResearchCards = ({ cardList }) => {
    console.log(cardList);
  return (
    <Stack direction="row" sx={{ gap: 3, alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
        {cardList.map((card) => (
            <StyledCard elevation={6}>
            <ContentBox>
              <Icon className="icon">{card.icon}</Icon>
              <Box ml="12px">
                <Small>{card.name}</Small>
                <Heading>{card.amount}</Heading>
              </Box>
            </ContentBox>
          </StyledCard>
          ))}
    </Stack>
  );
};

export default StatResearchCards;