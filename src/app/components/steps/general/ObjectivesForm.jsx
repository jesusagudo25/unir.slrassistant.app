import {
    Backdrop,
    Button,
    CircularProgress,
    Divider,

    Grid,
    Icon,
    Snackbar,
    Alert,
    styled,
} from "@mui/material";
import { H5, Span } from 'app/theme/Typography';
import { useEffect, useState } from "react";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator"
import { useParams } from "react-router-dom";
import ListItems from "./ListItem";
import axios from "axios";

const TextField = styled(TextValidator)(() => ({
    width: "100%",
    marginBottom: "16px",
}));

const ContentRoot = styled('div')(({ theme }) => ({
    '& .icon': { fontSize: 20 },
    '& .success': { backgroundColor: theme.palette.success.main },
    '& .error': { backgroundColor: theme.palette.error.main },
    '& .info': { backgroundColor: theme.palette.primary.main },
    '& .iconVariant': { opacity: 0.9, marginRight: theme.spacing(1) },
    '& .message': { display: 'flex', alignItems: 'center' },
    '& .margin': { margin: theme.spacing(1) }
  }));

const ObjectivesForm = () => {
    const { REACT_APP_CLOUD_GATEWAY, REACT_APP_MICRO_REVIEW } = process.env;
    const { id } = useParams();

    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [severity, setSeverity] = useState("success");


    const [isLoading, setIsLoading] = useState(false);
    const [objectives, setObjectives] = useState([]); // [1,2,3]
    const [dataForm, setDataForm] = useState({
        description: "",
        projectId: id
    });

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsLoading(true);

        axios.post(`${REACT_APP_CLOUD_GATEWAY}${REACT_APP_MICRO_REVIEW}/projects/${id}/objectives`, dataForm)
            .then((res) => {
                console.log(res);
                setObjectives([...objectives, res.data]);
                setDataForm({ description: "", projectId: id });
                setOpen(true);
                setMessage("Objective added successfully");
                setSeverity("success");
                setIsLoading(false);
            }
            ).catch((err) => {
                console.log(err);
                setIsLoading(false);
            });
    };

    const handleChange = (event) => {
        setDataForm({ ...dataForm, [event.target.name]: event.target.value });
    };

    const getObjectivesProject = async () => {
        setIsLoading(true);
        axios.get(`${REACT_APP_CLOUD_GATEWAY}${REACT_APP_MICRO_REVIEW}/projects/${id}/objectives`)
            .then((res) => {
                setObjectives(res.data);
                setIsLoading(false);
            }
            ).catch((err) => {
                console.log(err);
                setIsLoading(false);
            });
    }

    useEffect(() => {
        getObjectivesProject();
    }, []);

    return (
        <div>
            <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
                <H5 >List of Objectives</H5>
                <Grid container spacing={6}>
                    <Grid item lg={10} md={12} sm={12} xs={12} sx={{ mt: 2 }}>
                        <TextField
                            type="text"
                            name="description"
                            id="standard-basic"
                            value={dataForm.description}
                            onChange={handleChange}
                            errorMessages={["this field is required"]}
                            label="Please enter an objective"
                            validators={["required", "minStringLength: 4"]}
                            size="small"
                        />
                    </Grid>
                    <Grid item lg={2} md={2} sm={2} xs={2} sx={{ mt: 2 }} alignItems="flex-end">
                        <Button color="primary" variant="contained" type="submit" size="large" >
                            <Icon>add</Icon>
                            <Span sx={{ pl: 1, textTransform: "capitalize" }}>Add</Span>
                        </Button>
                    </Grid>
                </Grid>
                <Divider sx={{ mb: 2 }} />

                <Grid container spacing={6}>
                    <Grid item lg={12} md={12} sm={12} xs={12} sx={{ mt: 2 }}>
                        <ListItems items={objectives} url={`${REACT_APP_CLOUD_GATEWAY}${REACT_APP_MICRO_REVIEW}/projects/${id}/objectives`} setItems={setObjectives} setIsLoading={setIsLoading} 
                        setOpen={setOpen} setMessage={setMessage} setSeverity={setSeverity}/>
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

export default ObjectivesForm