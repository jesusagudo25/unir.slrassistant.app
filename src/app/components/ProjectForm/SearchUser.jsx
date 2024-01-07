import axios from 'axios';
import propTypes from 'prop-types';
import React, { useRef, useState } from 'react';

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function SearchUser({ userFilter, setUserFilter }) {

    const { REACT_APP_CLOUD_GATEWAY, REACT_APP_MICRO_SECURITY } = process.env;

    const previousController = useRef();

    const [options, setOptions] = useState([]);

    const getDataAutocomplete = (searchTerm) => {
        if (previousController.current) {
            previousController.current.abort();
        }

        const controller = new AbortController();
        const { signal } = controller;
        previousController.current = controller;

        axios.get(`${REACT_APP_CLOUD_GATEWAY}${REACT_APP_MICRO_SECURITY}/users?email${searchTerm}`, { signal })
            .then((res) => {
                const data = res.data.map((item) => ({label: `${item.email}`, value: item.id}));
                //remove email with email is equal to current user email
                const index = data.findIndex((item) => item.label === localStorage.getItem('email'));
                if(index !== -1) data.splice(index, 1);
                
                setOptions(data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <Autocomplete
            id="user-search"
            value={userFilter.email}
            disablePortal={false}
            options={options}
            onChange={(event, newValue) => {
                console.log(newValue, 'newValue');
                const userFilterCopy = {...userFilter};
                if(newValue !== null){
                    userFilterCopy.userId = newValue.value;
                    userFilterCopy.email = newValue.label;
                }
                else {
                    userFilterCopy.userId = '';
                    userFilterCopy.email = '';
                }
                setUserFilter(userFilterCopy);

            }}
            renderInput={(params) => <TextField {...params}size='small' InputLabelProps={{ shrink: true }} placeholder='Search user' />}
            onInputChange={(event, newInputValue) => {
                const userFilterCopy = {...userFilter};
                if(newInputValue !== '') userFilterCopy.email = newInputValue;
                if (event?.target) {
                    userFilterCopy.userId = '';
                    if (event?.target?.value?.length > 1) {
                        getDataAutocomplete(event.target.value);
                    }
                    else {
                        setOptions([]);
                        userFilterCopy.email = '';
                    }
                    setUserFilter(userFilterCopy);
                }
            }}
            noOptionsText="No found"
            loadingText="Loading..."
            selectOnFocus
            clearOnBlur
            handleHomeEndKeys
            clearOnEscape
            blurOnSelect
            freeSolo
            loading
        />
    )
}

SearchUser.propTypes = {
    userFilter: propTypes.object,
    setUserFilter: propTypes.func,
}