import { Alert, Button, Icon, Snackbar } from '@mui/material';
import { amber, green } from '@mui/material/colors';
import { styled } from '@mui/material';
import PropTypes from 'prop-types';

import React from 'react';
import axios from 'axios';

const ContentRoot = styled('div')(({ theme }) => ({
  '& .icon': { fontSize: 20 },
  '& .iconVariant': { opacity: 0.9, marginRight: theme.spacing(1) },
  '& .message': { display: 'flex', alignItems: 'center' },
  '& .margin': { margin: theme.spacing(1) }
}));

//icon personalizado

const ListItem = ({ items, url, setItems, setIsLoading, setOpen, setMessage, setSeverity }) => {

  return (
    <ContentRoot>
      {items.length > 0 ? (
        items.map((item, index) => (
          <Alert variant="filled" key={index}
            sx={{
              mb: 2, backgroundColor: '#1976d226', color: '#34314c8a', fontWeight: 'bold'
            }}
            icon={<Icon className="icon">rounded_corner</Icon>} action={

              <Button color="inherit" size="small" onClick={() => {
                setIsLoading(true);
                setOpen(true);
                const currentId = item.id;

                axios.delete(`${url}/${currentId}`)
                  .then((res) => {
                    console.log(res);
                    setItems(items.filter((item) => item.id !== currentId));
                    setIsLoading(false);
                    setMessage("Deleted successfully");
                    setSeverity("success");
                  }
                  ).catch((err) => {
                    console.log(err);
                    setIsLoading(false);
                    setMessage("Error deleting");
                    setSeverity("error");
                  });
              }
              }>
                <Icon>close</Icon>
              </Button>

            }>
            {item.description}
          </Alert>
        ))
      ) : (
        <Alert severity="info">No hay items</Alert>
      )
      }
    </ContentRoot>
  )
}

ListItem.propTypes = {
  items: PropTypes.array.isRequired,
  url: PropTypes.string.isRequired,
  setItems: PropTypes.func.isRequired,
  setIsLoading: PropTypes.func.isRequired,
  setOpen: PropTypes.func.isRequired,
  setMessage: PropTypes.func.isRequired,
  setSeverity: PropTypes.func.isRequired
}

export default ListItem