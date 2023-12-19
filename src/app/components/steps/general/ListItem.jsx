import { Alert, Button, Icon, Snackbar } from '@mui/material';
import { amber, green } from '@mui/material/colors';
import { styled } from '@mui/material';

import React from 'react';

const ContentRoot = styled('div')(({ theme }) => ({
  '& .icon': { fontSize: 20 },
  '& .iconVariant': { opacity: 0.9, marginRight: theme.spacing(1) },
  '& .message': { display: 'flex', alignItems: 'center' },
  '& .margin': { margin: theme.spacing(1) }
}));

//icon personalizado

const ListItem = ({ items }) => {
  return (
    <ContentRoot>
        {items.map((item, index) => (
        <Alert variant="filled" key={index} sx={{ mb: 2, backgroundColor: '#1976d226', color: '#34314c8a', fontWeight: 'bold'
         }} icon={<Icon className="icon">rounded_corner</Icon>} action={
            <Button color="inherit" size="small">
                <Icon>close</Icon>
            </Button>
        }>
            {item}
        </Alert>
        ))
        }
    </ContentRoot>
  )
}

export default ListItem