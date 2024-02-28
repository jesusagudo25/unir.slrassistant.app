import {
    Box,
    Button,
    Divider,

    FormControl,

    Grid,
    Icon,

    Select,
    Stack,
    Snackbar,
    Alert,
    Backdrop,
    CircularProgress,
    styled,
} from "@mui/material";
import { H3, H5, Span } from 'app/theme/Typography';
import { useEffect, useState } from "react";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import ListItems from "./ListItem";
import SearchStringGroup from "./SearchStringGroup";
import axios from "axios";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

const ContentRoot = styled('div')(({ theme }) => ({
    '& .icon': { fontSize: 20 },
    '& .success': { backgroundColor: theme.palette.success.main },
    '& .error': { backgroundColor: theme.palette.error.main },
    '& .info': { backgroundColor: theme.palette.primary.main },
    '& .iconVariant': { opacity: 0.9, marginRight: theme.spacing(1) },
    '& .message': { display: 'flex', alignItems: 'center' },
    '& .margin': { margin: theme.spacing(1) }
}));

export default function SearchMethods() {

    const { REACT_APP_CLOUD_GATEWAY, REACT_APP_MICRO_REVIEW } = process.env;
    const { id } = useParams();

    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [severity, setSeverity] = useState("success");

    const [isLoading, setIsLoading] = useState(false);
    const [groups, setGroups] = useState([
        {
            id: 1,
            terms: '',
            metadata: 'All metadata',
            operator: '',
        },
        {
            id: 2,
            terms: '',
            metadata: 'All metadata',
            operator: 'AND',
        },
        {
            id: 3,
            terms: '',
            metadata: 'All metadata',
            operator: 'AND',
        }
    ]);
    const [groupsStore, setGroupsStore] = useState([]);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    }

    const handleSubmit = (event) => {
        const uuid = uuidv4();
        event.preventDefault();

        //add uuid to groups
        groups.forEach((item) => {
            item.uuid = uuid;
        });

        const groupsToSave = groups.map((item) => {
            return {
                uuid: item.uuid,
                terms: item.terms,
                metadata: item.metadata,
                operator: item.operator,
                orderByIndex: item.id,
                projectId: id
            }
        } );

        setIsLoading(true);
        axios.post(`${REACT_APP_CLOUD_GATEWAY}${REACT_APP_MICRO_REVIEW}/projects/${id}/search-strings`, {
            searchStrings: groupsToSave
        })
            .then((res) => {
                console.log(res);
                setIsLoading(false);
                setOpen(true);
                setMessage("Search string added successfully");
                setSeverity("success");
                getGroups();
                setGroups([{ id: 1, terms: '', metadata: 'All metadata', operator: 'AND' }, { id: 2, terms: '', metadata: 'All metadata', operator: 'AND' }, { id: 3, terms: '', metadata: 'All metadata', operator: 'AND' }])
            }
            ).catch((err) => {
                console.log(err);
                setIsLoading(false);
            });

    };

    const getGroups = () => {
        setIsLoading(true);
        axios.get(`${REACT_APP_CLOUD_GATEWAY}${REACT_APP_MICRO_REVIEW}/projects/${id}/search-strings`)
            .then((res) => {
                //groupby
                const groupByUuid = Object.groupBy(res.data, (item) => item.uuid);
                let groupsToDisplay = [];

                Object.keys(groupByUuid).forEach((key) => {
                    let terms = "";

                    groupByUuid[key].sort((a, b) => a.orderByIndex - b.orderByIndex);
                    groupByUuid[key].forEach((item) => {
                        if (item.orderByIndex === 1) {
                            terms += `(${item.terms}) [IN "${item.metadata}]`;
                        }
                        else {
                            terms += ` ${item.operator} (${item.terms}) [IN ${item.metadata}]`;
                        }
                    });

                    groupsToDisplay.push({
                        id: key,
                        description: terms,
                    });
                });

                setGroupsStore(groupsToDisplay);
                setIsLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setIsLoading(false);
            });
    }

    useEffect(() => {
        getGroups();
    }, []);

    return (
        <div>
            <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
                <H5 >Search Strings</H5>

                <SearchStringGroup groups={groups} setGroups={setGroups} />

                <Stack direction="row" sx={{ justifyContent: "flex-start", alignItems: "center", width: "100%", my: 2, gap: 2 }}>
                    <Button color="secondary" variant="contained" size="small" onClick={() => {
                        setGroups([{ id: 1, terms: '', metadata: 'All metadata', operator: 'AND' }, { id: 2, terms: '', metadata: 'All metadata', operator: 'AND' }, { id: 3, terms: '', metadata: 'All metadata', operator: 'AND' }])
                    }}>
                        Reset all
                    </Button>
                    <Button color="primary" variant="contained" type="submit" size="small" >
                        Save
                    </Button>
                </Stack>

                <Divider sx={{ mb: 2 }} />

                <Grid container spacing={6}>
                    <Grid item lg={12} md={12} sm={12} xs={12} sx={{ mt: 2 }}>
                        <ListItems items={groupsStore} url={`${REACT_APP_CLOUD_GATEWAY}${REACT_APP_MICRO_REVIEW}/projects/${id}/search-strings`} setItems={setGroupsStore} setIsLoading={setIsLoading} setOpen={setOpen} setMessage={setMessage} setSeverity={setSeverity} />
                    </Grid>
                </Grid>

            </ValidatorForm>

            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={isLoading}
            >
                <CircularProgress color="inherit" />
            </Backdrop>

            <ContentRoot>
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                    ContentProps={{ "aria-describedby": "message-id" }}
                >
                    <Alert onClose={handleClose} severity={severity}

                        sx={{ width: '100%' }} variant="filled">
                        {message}
                    </Alert>
                </Snackbar>
            </ContentRoot>
        </div>
    )
}
